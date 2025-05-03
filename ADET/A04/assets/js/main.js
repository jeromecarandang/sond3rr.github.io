var products = [
    {
      category: "Shounen",
      image: "assets/images/shonen.jpg",
      contents: [
        {
          name: "Dr. Stone",
          price: 150,
          image: "assets/images/dr.jpg"
        },
        {
          name: "Jujutsu Kaisen",
          price: 150,
          image: "assets/images/jjk.jpg"
        },
        {
          name: "Kaiju No.8",
          price: 150,
          image: "assets/images/kaiju.jpg"
        },
        {
          name: "Spy X Family",
          price: 150,
          image: "assets/images/spy.jpg"
        },
        {
          name: "One-Punch Man",
          price: 150,
          image: "assets/images/opm.jpg"
        },
        {
          name: "Tokyo Ghoul",
          price: 150,
          image: "assets/images/tokyo.jpg"
        },
        {
          name: "My Hero Academia",
          price: 150,
          image: "assets/images/mha.jpg"
        },
        {
          name: "Haikyuu!!",
          price: 150,
          image: "assets/images/hai.jpg"
        },
      ]
    },
    {
      category: "Shoujo",
      image: "assets/images/shoujo.JPG",
      contents: [
        {
          name: "Kimi ni Todoke",
          price: 150,
          image: "assets/images/kimi.jpg"
        },
        {
          name: "Orange",
          price: 150,
          image: "assets/images/orange.jpg"
        },
        {
          name: "Ao Haru Ride",
          price: 150,
          image: "assets/images/ao.jpg"
        },
        {
          name: "Sailor Moon",
          price: 150,
          image: "assets/images/sailor.jpg"
        },
        {
          name: "Fruit Basket",
          price: 150,
          image: "assets/images/fruit.jpg"
        },
        {
          name: "tora",
          price: 150,
          image: "assets/images/tora.jpg"
        },
      ]
    },
    {
      category: "Seinen",
      image: "assets/images/seinen.jpg",
      contents: [
        {
          name: "Berserk",
          price: 150,
          image: "assets/images/berserk.jpg"
        },
        {
          name: "Bungo Stray Dogs",
          price: 150,
          image: "assets/images/bungo.jpg"
        },
        {
          name: "Vinland Saga",
          price: 150,
          image: "assets/images/vin.jpg"
        },
        {
          name: "Monster",
          price: 150,
          image: "assets/images/monster.jpg"
        },
      ]
    },
    {
      category: "Josei",
      image: "assets/images/josei.jpg",
      contents: [
        {
          name: "Paradise Kiss",
          price: 150,
          image: "assets/images/josei.jpg"
        },
        {
          name: "Only Yesterday",
          price: 150,
          image: "assets/images/omo.webp"
        },
        {
          name: "No.6",
          price: 150,
          image: "assets/images/no.jpg"
        },
        {
          name: "Kuragehime ",
          price: 150,
          image: "assets/images/kura.jpg"
        },
        {
          name: "Chihayafuru",
          price: 150,
          image: "assets/images/chi.jpg"
        },
        {
          name: "Usagi Drop",
          price: 150,
          image: "assets/images/usa.jpg"
        },
      ]
    },
    {
      category: "Kodomo",
      image: "assets/images/kodomo.jpg",
      contents: [
        {
          name: "Doraemon",
          price: 150,
          image: "assets/images/dor.jpg"
        },
        {
          name: "Youkai Watch",
          price: 150,
          image: "assets/images/yo.jpg"
        },
        {
          name: "Astro Boy",
          price: 150,
          image: "assets/images/astro.jpg"
        },
        {
          name: "Digimon",
          price: 150,
          image: "assets/images/digi.jpg"
        },
      ]
    }
  ];

  var total = 0;

  function loadCategories() {
    var categoriesContainer = document.getElementById("categories");
    categoriesContainer.innerHTML = "";
    products.forEach(function (product, index) {
      categoriesContainer.innerHTML +=
        '<div onclick="loadProducts(' + index + ')" class="category-card">' +
        '<img src="' + product.image + '">' +
        '<div class="card-body">' +
        '<h5 class="text-overlay">' + product.category + '</h5>' +
        '</div>' +
        '</div>';
    });
  }

  function loadProducts(categoryIndex) {
    var maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";

    products[categoryIndex].contents.forEach(function (content) {
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