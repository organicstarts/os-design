import $ from "jquery";

export function sidebar() {
  $("#wrapper")
    .prepend(`<nav id="my-menu" class="primary sidebar mm-menu mm-menu_offcanvas mm-menu_theme-dark" aria-hidden="true">
      <ul>
          <li>
          <a class="nav-link" href="https://organicstart.com">
            Retail
          </a>
        </li>
        <li>
          <a class="nav-link" href="https://blog.organicstart.com">
            Blog
          </a>
        </li>
        <li >
          <a
            class="active nav-link"
            href="https://support.organicstart.com/hc/en-us"
          >
            Support
          </a>
        </li>
        <li class="nav-item" id="my-header">
        <a class="mburger mburger--collapse" href="#my-accountmenu">Account
        </a>
        </li>
      </ul>
</nav>`);
  Mmenu.configs.classNames.selected = "active";
  Mmenu.configs.offCanvas.page.selector = "#wrapper";

  document.addEventListener("DOMContentLoaded", () => {
    const menu = new Mmenu("#my-menu", {
      navbar: {
        title: ""
      },
      navbars: [{
        content: ["breadcrumbs", "close"]
      }],
      slidingSubmenus: false,
      extensions: ["fullscreen", "pagedim-black"]
    });
  });
}

export function accountBar() {
  $("#my-account")
    .prepend(`<nav id="my-accountmenu" class="primary sidebar mm-menu mm-menu_offcanvas mm-menu_theme-dark" aria-hidden="true">
  <ul>
    <li class="active"><a href="/">Home</a></li>
    <li><span>About us</span>
      <ul>
        <li><a href="/about/history/">History</a></li>
        <li><a href="/about/team/">The team</a></li>
        <li><a href="/about/address/">Our address</a></li>
      </ul>
    </li>
    <li><a href="/contact/">Contact</a></li>
  </ul>
</nav>`);
  Mmenu.configs.classNames.selected = "active";
  Mmenu.configs.offCanvas.page.selector = "#my-account";

  document.addEventListener("DOMContentLoaded", () => {
    const menu = new Mmenu("#my-accountmenu", {
      navbar: {
        title: ""
      },
      navbars: [{
        content: ["close"]
      }],
      slidingSubmenus: false,
      extensions: ["fullscreen", "position-bottom"]
    });
  });
}

export function navbar(store) {
  let storeColor = "";
  switch (store) {
    case "os":
      storeColor = "moss";
      break;
    case "osw":
      storeColor = "mustard";
      break;
    default:
      storeColor = "store-color";
      break;
  }
  $("#wrapper").prepend(navbarTemplate(storeColor, store));
}

function navbarTemplate(storeColor, store) {
  return `
    <header class="${storeColor}">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
        <a class="mburger mburger--collapse navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" href="#my-menu">
        
         <b></b>
         <b></b>
         <b></b>
     
      </a>

        <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
            <li class="nav-item ${store === "os" ? "active" : ""}">
              <a class="nav-link text-white" href="https://organicstart.com">
                Retail
              </a>
            </li>
            <li class="nav-item ${store === "blog" ? "active" : ""}">
              <a class="nav-link text-white" href="https://blog.organicstart.com">
                Blog
              </a>
            </li>
            <li class="nav-item ${store === "support" ? "active" : ""}">
              <a
                class="active nav-link text-white"
                href="https://support.organicstart.com/hc/en-us"
              >
                Support
              </a>
            </li>
            <li class="nav-item" id="my-header">
            <a class="mburger mburger--collapse" href="#my-accountmenu">account
          </a>
        </li>
          </ul>
          </div>
        </nav>
      </div>
    </header>
  `;
}
