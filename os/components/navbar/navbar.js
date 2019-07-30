import $ from "jquery";
import _ from "lodash";

export function scrollNav() {
  const $realSticky = document.querySelector("#primary");
  const $placeholderSticky = document.querySelector(".placeholder-header");

  const stickyHeader = () =>
    function() {
      const sr1 = $placeholderSticky.getBoundingClientRect();
      const sr2 = $realSticky.getBoundingClientRect();
      if (sr1.top > -10) {
        $realSticky.classList.remove("sticky");
        $placeholderSticky.style.top = -10;
      } else {
        $realSticky.classList.add("sticky");
        $placeholderSticky.style.top = `-${sr2.height + 1}px`;
      }
    };

  window.addEventListener("scroll", _.debounce(stickyHeader(), 15));
}

export function navbar(store) {
  let storeColor = "";
  let headerArray = [];
  switch (store) {
    case "os":
      storeColor = "white";
      break;
    case "osw":
      storeColor = "white";
      break;
    default:
      storeColor = "white";
      break;
  }
  headerArray.push(navbarTemplate("", store, "alpha", ""));
  headerArray.push(navbarTemplate(storeColor, store, "beta"));
  $("#wrapper").prepend(`<header id="primary">${headerArray.join("")}
  </header><div class="placeholder-header"></div>`);
}

function navbarTemplate(storeColor, store, headerType, textColor) {
  return `
      <div class="bg-${storeColor} header header--${headerType}">
        <nav class="navbar navbar-expand-lg navbar-light">
        <a class="mburger mburger--collapse navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" href="#my-menu">
        
         <b></b>
         <b></b>
         <b></b>
     
      </a>
        <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
            <li class="nav-item ${store === "os" ? "active" : ""}">
              <a class="nav-link ${textColor}" href="https://organicstart.com">
                Retail
              </a>
            </li>
            <li class="nav-item ${store === "blog" ? "active" : ""}">
              <a class="nav-link ${textColor}" href="https://blog.organicstart.com">
                Blog
              </a>
            </li>
            <li class="nav-item ${store === "support" ? "active" : ""}">
              <a
                class="nav-link ${textColor}"
                href="https://support.organicstart.com/hc/en-us"
              >
                Support
              </a>
            </li>
          </ul>
          </div>

          <a class="float-right nav-link" href="#my-accountmenu">  
            <i class="fa fa-user-circle fa-2x ${textColor}" aria-hidden="true"></i>
          </a>
          </ul>
        </nav>
      </div>
   
  `;
}
