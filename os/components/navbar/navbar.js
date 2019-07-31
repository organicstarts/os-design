import $ from "jquery";
import _ from "lodash";

function navbarTemplate() {
  return `
  <nav id="mainMenu" class="main-menu py-3 py-lg-5 px-3 px-xl-5 invisible position-absolute">
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center">
        <div class="col-2 m-0">
          <ul class="nav">
            <li class="nav-item-icon d-inline d-lg-none p-0">
              <a class="mburger mburger--collapse" href="#mainMobileMenu"><b></b><b></b><b></b></a>
            </li>
            <li class="nav-item d-none d-lg-inline p-0">
              <a href="https://organicstart.com" title="Home">
                <picture>
                  <img src="https://triad.imgix.net/os/i/logo.svg?s=83f3f5678face7e3f500c8aba1fd41e9"
                    alt="Organic Start" title="Organic Start Logo" class="logo img-fluid my-0">
                </picture>
              </a>
            </li>
        </div>
        <div class="col-10 m-0">
          <ul class="nav justify-content-end align-items-center">
            <li class="nav-item d-none d-lg-inline staggered-fade-up">
              <a href="#" class="nav-link">Baby Food</a>
              <div class="dropdown extra">
                <div class="style">
                  <div class="row justify-content-center align-items-center">
                    <div class="col m-0">
                      <svg class="dropdown-image-left m-0 p-0" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
                          dy=".3em">Placeholder</text>
                      </svg>
                    </div>
                    <div class="col m-0 p-4">
                      <div class="row no-gutters">
                        <div class="col">
                          <a class="dropdown-item" href="#">Porridge</a>
                          <a class="dropdown-item" href="#">Fruit &amp; Vegetable Purees</a>
                          <a class="dropdown-item" href="#">Snacks &amp; Teas</a>
                          <a class="dropdown-item" href="#"><small>VIEW ALL &raquo;</small></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item d-none d-lg-inline staggered-fade-up">
              <a href="#" class="nav-link">Baby Care</a>
              <div class="dropdown large">
                <div class="style p-4">
                  <div class="row justify-content-center align-items-center">
                    <div class="col m-0">
                      <a class="dropdown-item" href="#">Baby Wash</a>
                      <a class="dropdown-item" href="#">Balms</a>
                      <a class="dropdown-item" href="#">Oils</a>
                      <a class="dropdown-item" href="#">Lotions</a>
                    </div>
                    <div class="col m-0">
                    <a class="dropdown-item" href="#">Dental</a>
                      <a class="dropdown-item" href="#">Diapers</a>
                      <a class="dropdown-item" href="#">Bundles</a>
                      <a class="dropdown-item" href="#">Accessories</a>
                    </div>
                    <div class="col m-0">
                      <div class="dropdown-header">Outdoors</div>
                      <a class="dropdown-item" href="#">Repellents</a>
                      <a class="dropdown-item" href="#">First Aid</a>
                      <a class="dropdown-item" href="#">Sunscreen</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item d-none d-lg-inline staggered-fade-up">
              <a href="#" class="nav-link">Clothes</a>
            </li>
            <li class="nav-item d-none d-lg-inline staggered-fade-up">
              <a href="#" class="nav-link">Toys</a>
            </li>
            <li class="nav-item d-none d-lg-inline staggered-fade-up">
              <a href="#" class="nav-link">Diapers</a>
            </li>
            <li class="nav-item d-none d-lg-inline staggered-fade-up">
              <a href="#" class="nav-link">Mommy</a>
              <div class="dropdown large">
                <div class="style p-4">
                  <div class="row justify-content-center align-items-center">
                  <div class="col m-0">
                    <a class="dropdown-item" href="#">Body Wash</a>
                    <a class="dropdown-item" href="#">Balms</a>
                    <a class="dropdown-item" href="#">Lotions</a>
                    <a class="dropdown-item" href="#">Teas</a>
                  </div>
                    <div class="col m-0">
                      <div class="dropdown-header">Shop by Stage</div>
                      <a class="dropdown-item" href="#">Prenatal</a>
                      <a class="dropdown-item" href="#">Post-Partum</a>
                      <a class="dropdown-item" href="#">Breast-Feeding</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item-icon staggered-fade-up" id="AccountDrawer">
              <a href="#accountMenu"><i class="far fa-user-circle"></i></a>
            </li>
            <li class="nav-item-icon staggered-fade-up" id="CartDrawer">
              <a href="#cartMenu"><i class="fas fa-shopping-bag"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  `;
}

export function navbar(id) {
  $(`#${id}`).prepend(navbarTemplate());
}

function checkNav() {
  $("#mainMenu").removeClass("invisible");
  if (window.scrollY <= $("#mainMenu").height() - 32) { // 32 Pixels is the difference in top padding between default and slide-down
    $("#mainMenu")
      .addClass("position-absolute")
      .removeClass("bg-white")
      .removeClass("fixed-top")
      .removeClass("slide-down");
    if(window.innerWidth >= 1024) {
      $(".staggered-fade-up").each(function (i) {
        var $item = $(this); 
        setTimeout(function() {
          $item.addClass("animated fadeInDown").removeClass('staggered-fade-up');
        }, 150 * i);
      });
    } else {
      $(".staggered-fade-up").each(function() {
        $(this).removeClass("staggered-fade-up");
      });
    }
  }
  if (window.scrollY >= $("#mainMenu").height() + 96) { // 96 Pixels is the default padding
    $(".staggered-fade-up").each(function() {
      $(this).removeClass("staggered-fade-up");
    });
    $("#mainMenu")
      .removeClass("position-absolute")
      .addClass("bg-white")
      .addClass("fixed-top")
      .addClass("slide-down");
  }
}
export function scrollNav() {
  $(document).ready(function() {
    checkNav();
  });
  $(window).scroll(function() {
    checkNav();
  });
}
