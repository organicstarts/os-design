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
            <li class="nav-item d-none d-lg-inline m-0 p-0">
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
              <a href="#" class="nav-link">Baby Care</a>
              <div class="dropdown medium">
                <div class="style p-5" style="background-color:#555;">
                  <div class="row m-0 text-white">
                    <div class="col m-0">
                      <a class="dropdown-item p-0" href="#">Baby Wash</a>
                      <a class="dropdown-item p-0" href="#">Balms</a>
                      <a class="dropdown-item p-0" href="#">Oils</a>
                      <a class="dropdown-item p-0" href="#">Lotions</a>
                      <a class="dropdown-item p-0" href="#">Dental</a>
                      <a class="dropdown-item p-0" href="#">Diapers</a>
                    </div>
                    <div class="col m-0">
                      <div class="dropdown-header p-0 text-white">Outdoors</div>
                      <a class="dropdown-item p-0" href="#">Repellents</a>
                      <a class="dropdown-item p-0" href="#">First Aid</a>
                      <a class="dropdown-item p-0" href="#">Sunscreen</a>
                      <div class="dropdown-header p-0 mt-3 text-white">More</div>
                      <a class="dropdown-item p-0" href="#">Bundles</a>
                      <a class="dropdown-item p-0" href="#">Accessories</a>
                      <div class="text-right">
                        <a class="dropdown-item p-0 mt-3 mb-0" href="#"><small>VIEW ALL &raquo;</small></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item d-none d-lg-inline staggered-fade-up">
              <a href="#" class="nav-link">Baby Food</a>
              <div class="dropdown extra">
                <div class="style">
                  <div class="row m-0">
                    <div class="col-6 m-0 p-0">
                      <div class="w-100 h-100 bg-fruits dropdown-image-left d-flex justify-content-center align-items-center" style="background-image:url('https://as2.ftcdn.net/jpg/01/15/21/23/500_F_115212320_ua2tjIPsTtADy7Dp32S9KXXS3LuftYOd.jpg');background-size:cover;background-position:left center;background-repeat:no-repeat;">
                        <p class="m-auto text-white text-center font-weight-bold lead p-3" style="text-shadow:2px 2px 5px #000;">
                          Wholesome and Nutritious
                        </p>
                      </div>
                    </div>
                    <div class="col-6 m-0 p-5">
                      <div class="dropdown-header p-0 mt-3"></div>
                        <a class="dropdown-item p-0" href="#">Porridge</a>
                        <a class="dropdown-item p-0" href="#">Snacks &amp; Teas</a>
                        <a class="dropdown-item p-0" href="#">Fruit &amp; Vegetable Purees</a>
                        <div class="text-right">
                          <a class="dropdown-item p-0 mt-3 mb-0" href="#"><small>VIEW ALL &raquo;</small></a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item d-none d-lg-inline staggered-fade-up">
              <a href="#" class="nav-link">Clothes</a>
              <div class="dropdown large">
                <div class="style p-5">
                  <div class="row m-0">
                    <div class="col m-0">
                      <a class="dropdown-item p-0" href="#">Blankets</a>
                      <a class="dropdown-item p-0" href="#">Bodysuits</a>
                      <a class="dropdown-item p-0" href="#">Bibs &amp; Burp Cloths</a>
                      <a class="dropdown-item p-0" href="#">Pajamas &amp; Sleepwear</a>
                      <a class="dropdown-item p-0" href="#">Pants &amp; Shorts</a>
                      <a class="dropdown-item p-0" href="#">Bundles</a>
                      <a class="dropdown-item p-0" href="#">Accessories</a>
                    </div>
                    <div class="col m-0">
                      <div class="dropdown-header p-0">Shop By Age</div>
                      <a class="dropdown-item p-0" href="#">0 to 3 Months</a>
                      <a class="dropdown-item p-0" href="#">3 to 6 Months</a>
                      <a class="dropdown-item p-0" href="#">6 to 9 Months</a>
                      <a class="dropdown-item p-0" href="#">9 to 12 Months</a>
                      <a class="dropdown-item p-0" href="#">1+ Years</a>
                      <div class="text-right">
                        <a class="dropdown-item p-0 mt-3 mb-0" href="#"><small>VIEW ALL &raquo;</small></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item d-none d-lg-inline staggered-fade-up">
              <a href="#" class="nav-link">Diapers</a>
              <div class="dropdown extra">
                <div class="style">
                  <div class="row m-0">
                    <div class="col-7 m-0 p-0">
                      <div class="w-100 h-100 bg-fruits dropdown-image-left d-flex justify-content-center align-items-center" style="background-image:url('https://as2.ftcdn.net/jpg/01/35/28/95/500_F_135289556_Nltu3ZTF5NdjX3a2yhWHfu2BFF0NNETb.jpg');background-size:cover;background-position:right top;background-repeat:no-repeat;">
                        <p class="m-auto text-white text-center font-weight-bold lead p-3">
                        </p>
                      </div>
                    </div>
                    <div class="col-5 m-0 p-5">
                      <div class="dropdown-header p-0 mt-3">Shop by Size</div>
                        <a class="dropdown-item p-0" href="#">Sizes 0 and 1 <small>(6-14 lb)</small></a>
                        <a class="dropdown-item p-0" href="#">Sizes 2 and 3 <small>(12-28 lb)</small></a>
                        <a class="dropdown-item p-0" href="#">Sizes 4 and 5 <small>(22-37 lb)</small></a>
                        <a class="dropdown-item p-0" href="#">Sizes 6 and up <small>(33+ lb)</small></a>
                        <div class="text-right">
                          <a class="dropdown-item p-0 mt-3 mb-0" href="#"><small>VIEW ALL &raquo;</small></a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item d-none d-lg-inline staggered-fade-up">
              <a href="#" class="nav-link">Toys</a>
            </li>
            <li class="nav-item d-none d-lg-inline staggered-fade-up">
              <a href="#" class="nav-link">Mommy</a>
              <div class="dropdown small">
                <div class="style">
                  <div class="w-100 h-100 bg-fruits dropdown-image-top d-flex justify-content-center align-items-center p-5" style="background-image:url('https://as2.ftcdn.net/jpg/01/90/65/11/500_F_190651128_8fz185WGhlGFh4YJEhGTj94EsW3CMlJK.jpg');background-size:cover;background-position:center center;background-repeat:no-repeat;">
                    <p class="m-auto text-white text-center font-weight-bold lead p-5">
                    
                    </p>
                  </div>
                  <div class="p-5">
                    <div class="row justify-content-center align-items-center">
                      <div class="col m-0">
                        <a class="dropdown-item p-0" href="#">Body Wash</a>
                        <a class="dropdown-item p-0" href="#">Balms</a>
                        <a class="dropdown-item p-0" href="#">Lotions</a>
                        <a class="dropdown-item p-0" href="#">Teas</a>
                      </div>
                      <div class="col m-0">
                        <div class="dropdown-header p-0">Shop By Stage</div>
                        <a class="dropdown-item p-0" href="#">Prenatal</a>
                        <a class="dropdown-item p-0" href="#">Post-Partum</a>
                        <a class="dropdown-item p-0" href="#">Breast-Feeding</a>
                      </div>
                    </div>
                    <div class="text-right">
                      <a class="dropdown-item p-0 mt-3 mb-0" href="#"><small>VIEW ALL &raquo;</small></a>
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
