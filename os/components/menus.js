import Master from "./index"
import Mmenu from "mmenu-js"

export default class Menus extends Master {

    constructor() {
        super();
    }

    Main() {
        const mainMenu = document.getElementById("mainMenu")

        mainMenu.classList.remove("invisible")
        
        if (window.scrollY <= mainMenu.offsetHeight - 32) { // 32 Pixels is the difference in top padding between default and slide-down
            mainMenu.classList.add("position-absolute")
            mainMenu.classList.remove("bg-white", "fixed-top", "slide-down")

            if (window.innerWidth <= 1024) {
                const staggedElements = document.querySelectorAll('.staggered-fade-up')
                super.forEachElements(staggedElements, (i, el) => {
                    el.classList.remove("staggered-fade-up")
                })
            } else {
                const staggedElements = document.querySelectorAll('.staggered-fade-up')
                super.forEachElements(staggedElements, (i, el) => {
                    setTimeout(function () {
                        el.classList.add("animated", "fadeInDown")
                        el.classList.remove("staggered-fade-up")
                    }, 150 * i)
                })
            }
        }

        if (window.scrollY >= mainMenu.offsetHeight + 96) { // 96 Pixels is the default padding
            const staggedElements = document.querySelectorAll('.staggered-fade-up')
            super.forEachElements(staggedElements, (i, el) => {
                el.classList.remove("staggered-fade-up")
            })

            mainMenu.classList.remove("position-absolute")
            mainMenu.classList.add("bg-white", "fixed-top", "slide-down")
        }
    }

    Init(mobile) {
        // Todo: Account Drawer
        //document.getElementById('AccountLink').href = mobile ? '#accountMenu' : '/account.php'
        
        if (mobile) {
            document.getElementById('mainMobileMenu').classList.remove('d-none')
            // Todo: Account Drawer
            //document.getElementById('accountMenu').classList.remove('d-none')

            //Mmenu.configs.classNames.selected = "active"
            //Mmenu.configs.offCanvas.page.selector = "#wrapper"

            new Mmenu("#mainMobileMenu", {
                navbar: false,
                "extensions": [
                    "border-none",
                    "fx-listitems-drop",
                    "pagedim-black",
                    "position-front",
                    "theme-white"

                ]
            })

            // Todo: Account Drawer
            // new Mmenu("#accountMenu", {
            //     navbar: false,
            //     "extensions": [
            //         "border-none",
            //         "fx-listitems-drop",
            //         "fullscreen",
            //         "pagedim-black",
            //         "position-front",
            //         "position-bottom",
            //         "theme-white"

            //     ]
            // })

        }

        // document.getElementById('cartMenu').classList.remove('d-none')
        // new Mmenu("#cartMenu", {
        //     navbar: false,
        //     "extensions": [
        //         "border-none",
        //         "fx-listitems-drop",
        //         //"pagedim-black",
        //         "position-front",
        //         "position-right",
        //         "theme-white"
        //     ]
        // })

        this.Main()
    }
}