import Master from "./index"
import Mmenu from "mmenu-js"

export default class Menus extends Master {

    constructor() {
        super();
    }

    Main() {
        const $ = require('jquery')

        $("#mainMenu").removeClass("invisible")

        if (window.scrollY <= $("#mainMenu").height() - 32) { // 32 Pixels is the difference in top padding between default and slide-down
            $("#mainMenu")
                .addClass("position-absolute")
                .removeClass("bg-white")
                .removeClass("fixed-top")
                .removeClass("slide-down")

            if (window.innerWidth >= 1024) {
                $(".staggered-fade-up").each(function () {
                    $(this).removeClass("staggered-fade-up")
                })
            } else {
                $(".staggered-fade-up").each(function (i) {
                    var $item = $(this)

                    setTimeout(function () {

                        $item
                            .addClass("animated fadeInDown")
                            .removeClass("staggered-fade-up")

                    }, 150 * i)
                })
            }
        }

        if (window.scrollY >= $("#mainMenu").height() + 96) { // 96 Pixels is the default padding
            $(".staggered-fade-up").each(function () {
                $(this).removeClass("staggered-fade-up")
            })

            $("#mainMenu")
                .removeClass("position-absolute")
                .addClass("bg-white")
                .addClass("fixed-top")
                .addClass("slide-down")
        }
    }

    Init(mobile) {
        document.getElementById('AccountLink').href = mobile ? '#accountMenu' : '{{urls.account.index}}'
        
        if (mobile) {
            document.getElementById('mainMobileMenu').classList.remove('d-none')
            document.getElementById('accountMenu').classList.remove('d-none')

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

            new Mmenu("#accountMenu", {
                navbar: false,
                "extensions": [
                    "border-none",
                    "fx-listitems-drop",
                    "fullscreen",
                    "pagedim-black",
                    "position-front",
                    "position-bottom",
                    "theme-white"

                ]
            })

        }

        document.getElementById('cartMenu').classList.remove('d-none')
        new Mmenu("#cartMenu", {
            navbar: false,
            "extensions": [
                "border-none",
                "fx-listitems-drop",
                "pagedim-black",
                "position-front",
                "position-right",
                "theme-white"
            ]
        })

        this.Main()
    }

}