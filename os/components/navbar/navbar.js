import $ from "jquery";

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
          </ul>
          </div>

          <a class="float-right pt-2 mburger mburger--collapse navbar-toggler" href="#my-accountmenu">  
            <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
          </a>
        </nav>
      </div>
      
    </header>
  `;
}
