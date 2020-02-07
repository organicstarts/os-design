import Master from "./components/index"
import Menus from "./components/menus"
import Modals from "./components/modals"
import Cookies from "./components/cookies"
import Swipes from "./components/swipes"
import Products from "./components/products"
import Scrolls from "./components/scrolls"
import Cart from "./components/cart"

export class Public extends Master {

  constructor() {
    super()

    this.Swipes = new Swipes()
    this.Modals = new Modals()
    this.Products = new Products()
    this.Cookies = new Cookies()
  }

  Start() {
    const Menu = new Menus(),
          Scrolly = new Scrolls(),
          Carts = new Cart()

    this.jQuery(document).ready(() => {

      // Initialize the Main Menu
      //Menu.Init(this.isTablet)

      // Initilize Swipes (Flickity and Slick)
      this.Swipes.Products()

      // Initilize the Cart
      Carts.Init()
      
      // Mobile Only
      if (!this.isMobile) {
        Scrolly.Init()
        Scrolly.Animate('ready')
      }

      var y = 0

      /// On Scrolling...
      window.addEventListener('scroll', () => {
        var dir
        if (window.scrollY > y){
          dir = 'down'
       } else {
          dir = 'up'
       }
       y = (window.scrollY || document.documentElement.scrollTop) <= 0 ? 0 : (window.scrollY || document.documentElement.scrollTop)

        if (!this.isMobile) {
          Menu.Scrolling(dir)
        }

        Scrolly.Animate('scroll')
      })
    })
  }

  RemoveFromCart(el) {
    const Carts = new Cart()
    Carts.RemoveFromCart(el)
  }

  AddOneToCart(el) {
    const Carts = new Cart()
    Carts.AddOneToCart(el)
  }

  RemoveOneFromCart(el) {
    const Carts = new Cart()
    Carts.RemoveOneFromCart(el)
  }

}

//export const OrganicStart = new Public()