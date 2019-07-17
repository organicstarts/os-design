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
  $("body").prepend(navbarTemplate(storeColor));
}

function navbarTemplate(storeColor) {
  return `
    <header>
  <div class="pusher" itemscope="itemscope" itemtype="http://schema.org/WebPageElement">
    <div class="ui small borderless inverted ${storeColor} main menu d-print-none">
        <nav class="container">
            <a class="item" href="https://organicstart.com">Retail</a>
            <a class="item" href="https://blog.organicstart.com">Blog</a>
            <a class="active item" href="https://support.organicstart.com/hc/en-us">Support</a>
        </nav>
    </div>
   
    </header>`;
}
