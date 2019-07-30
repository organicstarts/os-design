import $ from "jquery";
import _ from "lodash";

export function scrollNav() {
  $(window).scroll(function() {
    if (this.scrollY >= 50) {
      $("#primary")
        .removeClass("position-absolute")
        .addClass("bg-white")
        .addClass("fixed-top");

      $("#primary").addClass("slide-down");
      $("#primary").removeClass("fade-up");
    } else {
      $("#primary")
        .addClass("position-absolute")
        .removeClass("bg-white")
        .removeClass("fixed-top");

      $("#primary").removeClass("slide-down");
      $("#primary").addClass("fade-up");
    }
  });
}

export function navbar() {
  $("#wrapper").prepend(navbarTemplate());
}

function navbarTemplate() {
  return `
  <nav id="primary" class="main-menu py-3 py-lg-5 px-3 px-xl-5 position-absolute">
  <div class="container-fluid">
    <div class="row justify-content-center align-items-center">
      <div class="col-2 m-0">
        <ul class="nav">
          <li class="nav-item-icon d-inline d-lg-none p-0">
            <a class="mburger mburger--collapse" href="#my-menu"><b></b><b></b><b></b></a>
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
          <li class="nav-item d-none d-lg-inline">
            <a href="#">Baby Food</a>
          </li>
          <li class="nav-item d-none d-lg-inline">
            <a href="#">Baby Care</a>
          </li>
          <li class="nav-item d-none d-lg-inline">
            <a href="#">Clothes</a>
          </li>
          <li class="nav-item d-none d-lg-inline">
            <a href="#">Toys</a>
          </li>
          <li class="nav-item d-none d-lg-inline">
            <a href="#">Diapers</a>
          </li>
          <li class="nav-item d-none d-lg-inline">
            <a href="#">Mommy</a>
          </li>
          <li class="nav-item-icon" id="AccountDrawer">
            <a href="#my-accountmenu"><i class="far fa-user-circle"></i></a>
          </li>
          <li class="nav-item-icon" id="CartDrawer">
            <a href="#"><i class="fas fa-shopping-bag"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  `;
}
