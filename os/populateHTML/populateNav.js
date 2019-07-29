import $ from "jquery";

export function populateSideNav(id) {
  $(`#${id}`)
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
}

export function populateAccountNav(id, email) {
  if (email) {
    $(`#${id}`)
      .append(`<nav id="my-accountmenu" class="primary sidebar mm-menu  mm-menu_theme-dark" aria-hidden="true">
        <ul class="text-center">
        <li>
           <a class="nav-link" href="https://organicstart.com">
            <i class="fa fa-user-circle fa-5x"></i>
           </a> 
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
          <li>
              <a class="active nav-link" href="https://support.organicstart.com/hc/en-us">
              Support
              </a>
          </li>
      </ul> 
    </nav>`);
  } else {
    $(`#${id}`)
      .append(`<nav id="my-accountmenu" class="primary sidebar mm-menu  mm-menu_theme-dark" aria-hidden="true">
        <ul class="text-center">
        <li>
           <a class="nav-link" href="https://organicstart.com">
            <i class="fa fa-user-circle fa-5x"></i>
           </a> 
          <li>
              <a class="nav-link" href="https://organicstart.com">
               Login
              </a>
          </li>
          <li>
              <a class="nav-link" href="https://blog.organicstart.com">
                Sign Up
              </a>
          </li>
      </ul> 
    </nav>`);
  }
}