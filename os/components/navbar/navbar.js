import $ from "jquery";

export function sidebar() {
  Mmenu.configs.classNames.selected = "active";
  Mmenu.configs.offCanvas.page.selector = "#my-page";

  document.addEventListener("DOMContentLoaded", () => {
    const menu = new Mmenu("#my-menu", {
      slidingSubmenus: false,
      extensions: ["pagedim-black"],

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
  $("#my-page").prepend(navbarTemplate(storeColor, store));
}

function navbarTemplate(storeColor, store) {
  return `
    <header class="${storeColor}">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
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
          </ul>
        </nav>
      </div>
    </header>
  `;
}
