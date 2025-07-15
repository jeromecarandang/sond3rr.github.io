var categories = [];
var products = [];

const getAllCategories = async () => {
  fetch(
    'http://localhost/sond3rr.github.io/ADET/A06/A06_BE/categories.php'
  )
    .then(response => response.json())
    .then(data => {
      categories = data;
      loadCategories();
    });
}

const getAllProducts = async (categoryID) => {
  const categoryData = {
    categoryID: categoryID
  };

  fetch(
    'http://localhost/sond3rr.github.io/ADET/A06/A06_BE/products.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(categoryData)
  })
    .then(response => response.json())
    .then(data => {
      products = data;
      loadProducts();
    });
}

getAllCategories();

var total = 0;

function loadCategories() {
  var categoriesContainer = document.getElementById("categories");

  categories.forEach(function (category) {
    categoriesContainer.innerHTML +=
      '<div onclick="getAllProducts(' + category.categoryID + ')" class="category-card">' +
      '<img src="' + category.image + '">' +
      '<div class="card-body">' +
      '<h5 class="text-overlay">' + category.name + '</h5>' +
      '</div>' +
      '</div>';
  });
}

function loadProducts(categoryID) {
  var maincontainer = document.getElementById("maincontainer");
  maincontainer.innerHTML = "";

  products.forEach(function (content) {
    maincontainer.innerHTML +=
      '<div onclick="addToReceipt(' + content.price + ', \'' + content.name + '\')" class="col-6">' +
      '<div class="product-card shadow">' +
      '<img src="' + content.image + '">' +
      '<div class="product-info mt-auto">' +
      '<small>' + content.name + '</small><br>' +
      '<small>₱' + content.price + '</small>' +
      '</div>' +
      '</div>' +
      '</div>';
  });
}


function addToReceipt(price, name) {
  var receiptContainer = document.getElementById("receipt");
  total = parseFloat(total) + parseFloat(price);

  var totalValueElement = document.getElementById("totalValue");
  totalValueElement.innerHTML = total.toFixed(2);

  receiptContainer.innerHTML +=
    '<div class="d-flex justify-content-between">' +
    '<div><small>' + name + '</small></div>' +
    '<div><small>₱' + price + '</small></div>' +
    '</div>';
}

function clearReceipt() {
  var receiptContainer = document.getElementById("receipt");
  var totalValueElement = document.getElementById("totalValue");
  receiptContainer.innerHTML = "";
  total = 0;
  totalValueElement.innerHTML = "0.00";
}

loadCategories();