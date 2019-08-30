import Master from "./components/index"
import Menus from "./components/menus"
import Modals from "./components/modals"
import Swipes from "./components/swipes"
import Products from "./components/products"
import Scrolls from "./components/scrolls"
import Cart from "./components/cart"

class Public extends Master {

  constructor() {
    super()
    this.Swipes = new Swipes()
    this.Modals = new Modals()
    this.Products = new Products()
  }

  Start() {
    const Menu = new Menus(),
          Scrolly = new Scrolls(),
          Carts = new Cart()

    var Breakpoints = {
      Mobile: 425,
      Tablet: 768,
      Laptop: 1024,
      LargeLaptop: 1440,
      Desktop: 2560
    }

    this.jQuery(document).ready(() => {
      this.Swipes.Products()
      
      if (window.innerWidth > Breakpoints.Mobile) {
        Scrolly.Init()
        Scrolly.Animate('ready')

        this.jQuery(window).scroll(() => {
          Scrolly.Animate('scroll')
        })
      }

      Menu.Init(window.innerWidth > Breakpoints.Tablet ? false : true)

      Carts.Init()
    })

    this.jQuery(window).scroll(() => {
      Menu.Main()
    })
  }

  RemoveFromCart(el) {
    const Carts = new Cart()
    Carts.RemoveFromCart(el)
  }

}

export const OrganicStart = new Public()