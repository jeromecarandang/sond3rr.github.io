<?php
$page = "home";

if (isset($_GET['page'])) {
  $page = $_GET['page'];
  switch ($page) {
    case "home":
      $page = "home";
      break;
    case "profile":
      $page = "profile";
      break;
    case "playlist1":
      $page = "playlist1";
      break;
    case "playlist2":
      $page = "playlist2";
      break;
    default:
      header("Location: ?page=home");
      break;
  }
} else {
  header("Location: ?page=home");
}

?>

<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>musik</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="icon" href="images/icon1.png" type="image/jpg">
  <style>
    body {
      font-family: 'Gotham', sans-serif;
      background-color: #121212;
      color: #ffffff;
    }

    .card {
      background-color: #1f1f1f;
      border: none;
    }

    .nav-link {
      color: #ffffff;
      font-size: 1.8rem;
      margin-bottom: 1rem;
      border-radius: 10px;
      padding: 10px 15px;
      transition: background-color 0.3s;
    }

    .nav-link:hover,
    .nav-link.active {
      background-color: #292929;
      color: #ed944d !important;
      text-decoration: none;
    }

    .nav-link:active,
    .nav-link:focus {
      color: #ed944d !important;
      background-color: #292929 !important;
      outline: none !important;
    }

    .card-title {
      color: antiquewhite;
      font-weight: bold;
    }

    .card-text {
      color: gray
    }

    .card::-webkit-scrollbar {
      width: 15px;
    }

    .card::-webkit-scrollbar-thumb {
      background-color: #ed944d;
      border-radius: 10px;
      border: 3px solid #292929;
    }

    @media (max-width: 1000px) {
      .hide-on-1000 {
        display: none !important;
      }
    }
  </style>
</head>

<body>
  <div class="container-fluid">
    <div class="row g-3">
      <div class="col-3">
        <div class="card shadow rounded-5 mt-3 p-3" style="height: 95vh;">
          <h1 class="mb-4 mt-3 mx-2 hide-on-1000" style="font-weight: bold; color: antiquewhite; font-size: 3rem;">musik</h1>

          <nav class="nav flex-column">
            <a class="nav-link d-flex align-items-center" href="?page=home">
              <img src="images/home.png" width="30" height="30" class="me-3">
              <span class="hide-on-1000">Home</span>
            </a>
            <a class="nav-link d-flex align-items-center" href="?page=profile">
              <img src="images/sid.jpg" width="40" height="40" class="me-2 rounded-5">
              <span class="hide-on-1000">Profile</span>
            </a>
            <a class="nav-link d-flex align-items-center" href="?page=playlist1">
              <img src="images/meme.jpg" width="40" height="40" class="me-2 rounded-5">
              <span class="hide-on-1000">Collections #1</span>
            </a>
            <a class="nav-link d-flex align-items-center" href="?page=playlist2">
              <img src="images/dog.jpg" width="40" height="40" class="me-2 rounded-5">
              <span class="hide-on-1000">Collections #2</span>
            </a>
          </nav>


        </div>
      </div>

      <div class="col-9">
        <div class="card shadow rounded-5 mt-3 p-3" style="height: 95vh; overflow-y: auto;">
          <?php include("shared/" . $page . ".php"); ?>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>