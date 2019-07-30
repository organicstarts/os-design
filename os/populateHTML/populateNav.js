import $ from "jquery";

export function populateSideNav(id) {
  $(`#${id}`)
    .prepend(`<nav id="mainMobileMenu" class="primary sidebar mm-menu mm-menu_offcanvas mm-menu_theme-dark" aria-hidden="true">
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
        <a class="mburger mburger--collapse" href="#accountMenu">Account
        </a>
        </li>
      </ul>
</nav>`);
}

export function populateAccountNav(id, email) {
  if (email) {
    $(`#${id}`)
      .append(`<nav id="accountMenu" class="primary sidebar mm-menu  mm-menu_theme-dark" aria-hidden="true">
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
      .append(`<nav id="accountMenu" class="primary sidebar mm-menu  mm-menu_theme-dark" aria-hidden="true">
         <div class="row text-center">
             <a class="col-6" href="https://organicstart.com">
              <i class="fa fa-star fa-2x"></i>
             </a> 
             <a class="col-3" href="https://organicstart.com">
              <i class="fa fa-user-circle fa-5x"></i>
             </a> 
             <a class="col-3" href="https://organicstart.com">
              <i class="fa fa-question-circle fa-2x"></i>
             </a> 

        <ul class="mt-3">        
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
      </div>
    </nav>`);
  }
}
