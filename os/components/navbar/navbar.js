import $ from "jquery";
import _ from "lodash";

function navbarTemplate() {
  return `
<header id="mainMenu" class="main-menu py-3 py-lg-5 px-3 px-xl-5 invisible position-absolute" role="banner">
  <div class="container-fluid">
      <div class="row justify-content-center align-items-center">
          <div class="col-2 m-0">
              <ul class="nav">
                  <li class="nav-item-icon d-inline d-lg-none p-0">
                      <a class="mburger mburger--collapse" href="#mainMobileMenu"><b></b><b></b><b></b></a>
                  </li>
                  <li class="nav-item d-none d-lg-inline m-0 p-0">
                      <a href="/" title="Home">
                          <picture>
                              <img src="https://triad.imgix.net/os/i/logo.svg?s=83f3f5678face7e3f500c8aba1fd41e9" alt="Organic Start" title="Organic Start Logo" class="logo img-fluid my-0">
                          </picture>
                      </a>
                  </li>
          </div>
          <nav class="col-10 m-0" aria-label="Main" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
              <ul class="nav justify-content-end align-items-center float-right m-0">
                  <li class="nav-item-icon animated fadeInDown delay-1s slow" id="AccountDrawer">
                      <a id="accountLink" href=""><i class="far fa-user-circle"></i></a>
                  </li>
                  <li class="nav-item-icon animated fadeInDown delay-1s slow" id="CartDrawer">
                      <a href="#cartMenu"><i class="fas fa-shopping-bag"></i></a>
                  </li>
              </ul>
              <ul class="nav justify-content-end float-right d-none d-lg-flex">
                  <li class="nav-item staggered-fade-up">
                      <div itemprop="name">
                          <a role="button" itemprop="url" id="babyCareDropdown" class="nav-link" aria-haspopup="true" aria-expanded="false" href="/baby-care">Baby Care</a>
                      </div>
                      <div class="dropdown medium" aria-labelledby="babyCareDropdown">
                          <div class="style p-5" style="background-color:#555;">
                              <nav class="row m-0 text-white" aria-label="Baby Care" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
                                  <ul class="col m-0 list-unstyled">
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/baby-care/baby-wash">Baby Wash</a>
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/baby-care/balms">Balms</a>
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/baby-care/oils">Oils</a>
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/baby-care/lotions">Lotions</a>
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/baby-care/dental">Dental</a>
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/baby-care/diapers">Diapers</a>
                                      </li>
                                  </ul>
                                  <ul class="col m-0 list-unstyled">
                                      <li class="dropdown-header p-0 text-white">
                                          Outdoors
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/baby-care/repellents">Repellents</a>
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/baby-care/first-aid">First Aid</a>
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/baby-care/sunscreen">Sunscreen</a>
                                      </li>
                                      <li class="dropdown-header p-0 mt-3 text-white">
                                          More
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/baby-care/bundles">Bundles</a>
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/baby-care/accessories">Accessories</a>
                                      </li>
                                      <li class="text-right">
                                          <a class="dropdown-item p-0 mt-3 mb-0" href="/baby-care"><small>VIEW ALL <i class="fas fa-arrow-right"></i></small></a>
                                      </li>
                                  </ul>
                              </nav>
                          </div>
                      </div>
                  </li>
                  <li class="nav-item staggered-fade-up">
                      <div itemprop="name">
                          <a role="button" itemprop="url" id="babyFoodDropdown" class="nav-link" aria-haspopup="true" aria-expanded="false" href="/baby-food">Baby Food</a>
                      </div>
                      <div class="dropdown extra" aria-labelledby="babyFoodDropdown">
                          <div class="style">
                              <div class="row m-0">
                                  <div class="col-6 m-0 p-0">
                                      <div class="w-100 h-100 bg-fruits dropdown-image-left d-flex justify-content-center align-items-end"
                                          style="background-image:url('https://as2.ftcdn.net/jpg/01/15/21/23/500_F_115212320_ua2tjIPsTtADy7Dp32S9KXXS3LuftYOd.jpg');background-size:cover;background-position:left center;background-repeat:no-repeat;">
                                          <p class="mt-auto text-white text-center font-weight-bold lead pb-3 subheader"
                                              style="text-shadow: -1px -1px 1px rgba(0,0,0,0.5), 1px 1px 1px rgba(0,0,0,0.5), 1px 1px 5px #000;">
                                              Wholesome and Nutritious
                                          </p>
                                      </div>
                                  </div>
                                  <ul class="col-6 m-0 p-5 list-unstyled" role="navigation" aria-label="Baby Food" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/baby-food/porridge">Porridge</a>
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/baby-food/snacks-teas">Snacks &amp; Teas</a>
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0 mb-0" href="/baby-food/fruit-vegetable-purees">Fruit &amp; Vegetable Purees</a>
                                      </li>
                                      <li class="text-right">
                                          <a class="dropdown-item p-0 mt-5 mb-0 badge badge-pill badge-dark bg-light rounded-pill text-dark px-3 py-1 w-auto align-middle" href="/baby-food"><small>VIEW ALL <i class="fas fa-arrow-right"></i></small></a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </li>
                  <li class="nav-item staggered-fade-up" itemprop="name">
                      <div itemprop="name">
                          <a role="button" itemprop="url" id="clothesDropdown" class="nav-link" aria-haspopup="true" aria-expanded="false" href="/clothes">Clothes</a>
                      </div>
                      <div class="dropdown large" aria-labelledby="clothesDropdown">
                          <div class="style">
                              <div class="row m-0">
                                  <div class="col-6 m-0 p-0">
                                      <div class="w-100 h-100 bg-fruits dropdown-image-left d-flex justify-content-center align-items-end"
                                          style="background-image:url('https://www.iloveplaytime.com/interface/newyork/exhibitor2/1130_LZ1_17200.jpg');background-size:cover;background-position:center center;background-repeat:no-repeat;">
                                          <p class="mt-auto text-white text-center font-weight-bold lead pb-3 subheader"
                                              style="text-shadow:1px 1px 5px rgba(0, 0, 0, 0.5);">
                                              Native Organic Cotton
                                          </p>
                                      </div>
                                  </div>
                                  <ul class="col-6 m-0 p-5 list-unstyled" role="navigation" aria-label="Clothes" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/clothes/blankets">Blankets</a>
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/clothes/bodysuits">Bodysuits</a>
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/clothes/bibs-burp-cloths">Bibs &amp; Burp Cloths</a>
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/clothes/pajamas-sleepwear">Pajamas &amp; Sleepwear</a>
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/clothes/pants-shorts">Pants &amp; Shorts</a>
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/clothes/bundles">Bundles</a>
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0 mb-0" href="/clothes/accessories">Accessories</a>
                                      </li>
                                      <li class="text-right">
                                          <a class="dropdown-item p-0 mt-5 mb-0 badge badge-pill badge-dark bg-light rounded-pill text-dark px-3 py-1 w-auto align-middle" href="/clothes"><small>VIEW ALL <i class="fas fa-arrow-right"></i></small></a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </li>
                  <li class="nav-item staggered-fade-up" itemprop="name">
                      <a role="button" itemprop="url" id="diapersDropdown" class="nav-link" aria-haspopup="true" aria-expanded="false" href="/diapers">Diapers</a>
                      <div class="dropdown extra" aria-labelledby="diapersDropdown">
                          <div class="style">
                              <div class="row m-0">
                                  <div class="col-7 m-0 p-0">
                                      <div class="w-100 h-100 bg-fruits dropdown-image-left d-flex justify-content-center align-items-center"
                                          style="background-image:url('https://as2.ftcdn.net/jpg/01/35/28/95/500_F_135289556_Nltu3ZTF5NdjX3a2yhWHfu2BFF0NNETb.jpg');background-size:cover;background-position:center center;background-repeat:no-repeat;">
                                          <p class="m-auto text-white text-center font-weight-bold lead p-3">
                                          </p>
                                      </div>
                                  </div>
                                  <ul class="col-5 m-0 p-5 list-unstyled" role="navigation" aria-label="Diapers" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
                                      <li class="dropdown-header p-0 mt-3">
                                          Shop by Size
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/diapers/sizes-0-1">Sizes 0 and 1 <small>(6-14 lb)</small></a>
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/diapers/sizes-2-3">Sizes 2 and 3 <small>(12-28 lb)</small></a>
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0" href="/diapers/sizes-4-5">Sizes 4 and 5 <small>(22-37 lb)</small></a>
                                      </li>
                                      <li itemprop="name">
                                          <a itemprop="url" class="dropdown-item p-0 mb-0" href="/diapers/sizes-6-plus">Sizes 6 and up <small>(33+ lb)</small></a>
                                      </li>
                                      <li class="text-right">
                                          <a class="dropdown-item p-0 mt-5 mb-0 badge badge-pill badge-dark bg-light rounded-pill text-dark px-3 py-1 w-auto align-middle" href="/diapers"><small>VIEW ALL <i class="fas fa-arrow-right"></i></small></a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </li>
                  <li class="nav-item staggered-fade-up" itemprop="name">
                      <a itemprop="url" class="nav-link" href="#">Toys</a>
                  </li>
                  <li class="nav-item staggered-fade-up" itemprop="name">
                      <a role="button" itemprop="url" id="mommyDropdown" class="nav-link" aria-haspopup="true" aria-expanded="false" href="#">Mommy</a>
                      <div class="dropdown small" aria-labelledby="mommyDropdown">
                          <div class="style">
                              <div class="w-100 h-100 bg-fruits dropdown-image-top d-flex justify-content-center align-items-center p-5"
                                  style="background-image:url('https://as2.ftcdn.net/jpg/01/90/65/11/500_F_190651128_8fz185WGhlGFh4YJEhGTj94EsW3CMlJK.jpg');background-size:cover;background-position:center center;background-repeat:no-repeat;">
                                  <p class="m-auto text-white text-center font-weight-bold lead p-5">

                                  </p>
                              </div>
                              <div class="p-5">
                                  <nav class="row" role="navigation" aria-label="Mommy" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
                                      <ul class="col m-0 list-unstyled">
                                          <li itemprop="name">
                                              <a itemprop="url" class="dropdown-item p-0" href="#">Body Wash</a>
                                          </li>
                                          <li itemprop="name">
                                              <a itemprop="url" class="dropdown-item p-0" href="#">Balms</a>
                                          </li>
                                          <li itemprop="name">
                                              <a itemprop="url" class="dropdown-item p-0" href="#">Lotions</a>
                                          </li>
                                          <li itemprop="name">
                                              <a itemprop="url" class="dropdown-item p-0 mb-0" href="#">Teas</a>
                                          </li>
                                      </ul>
                                      <ul class="col m-0 list-unstyled">
                                          <li class="dropdown-header p-0">
                                              Shop By Stage
                                          </li>
                                          <li itemprop="name">
                                              <a itemprop="url" class="dropdown-item p-0" href="#">Prenatal</a>
                                          </li>
                                          <li itemprop="name">
                                              <a itemprop="url" class="dropdown-item p-0" href="#">Post-Partum</a>
                                          </li>
                                          <li itemprop="name">
                                              <a itemprop="url" class="dropdown-item p-0 mb-0" href="#">Breast-Feeding</a>
                                          </li>
                                      </ul>
                                  </nav>
                                  <div class="text-right">
                                      <a class="dropdown-item p-0 mt-5 mb-0 badge badge-pill badge-dark bg-light rounded-pill text-dark px-3 py-1 w-auto align-middle" href="#"><small>VIEW ALL <i class="fas fa-arrow-right"></i></small></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </li>
              </ul>
          </nav>
      </div>
  </div>
</header>
  `;
}

export function navbar(id) {
  $(`#${id}`).prepend(navbarTemplate());
}

function initializeAccount() {
  if ($(window).width() < 768) {
    $("#accountLink").attr("href", "#accountMenu");
  } else {
    $("#accountLink").attr("href", "{{urls.account.index}}");
  }
}
function checkAccount() {
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $("#accountLink").attr("href", "#accountMenu");
    } else {
      $("#accountLink").attr("href", "{{urls.account.index}}");
    }
  });
}

function checkNav() {
  $("#mainMenu").removeClass("invisible");
  if (window.scrollY <= $("#mainMenu").height() - 32) {
    // 32 Pixels is the difference in top padding between default and slide-down
    $("#mainMenu")
      .addClass("position-absolute")
      .removeClass("bg-white")
      .removeClass("fixed-top")
      .removeClass("slide-down");
    if (window.innerWidth >= 1024) {
      $(".staggered-fade-up").each(function(i) {
        var $item = $(this);
        setTimeout(function() {
          $item
            .addClass("animated fadeInDown")
            .removeClass("staggered-fade-up");
        }, 150 * i);
      });
    } else {
      $(".staggered-fade-up").each(function() {
        $(this).removeClass("staggered-fade-up");
      });
    }
  }
  if (window.scrollY >= $("#mainMenu").height() + 96) {
    // 96 Pixels is the default padding
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
    initializeAccount();
    checkAccount();
  });
  $(window).scroll(function() {
    checkNav();
  });
}
