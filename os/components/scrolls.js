import Master from "./index"

export default class Scrolls extends Master {

    constructor() {
        super();
    }

    Init() {
        const $ = require('jquery')
        $('[data-spy="item"]').each(function () {
            $(this).addClass('invisible')
        })
    }

    Animate(event) {
        const $ = require('jquery') // TODO: Remove jQuery Dependence

        $('[data-spy="scroll"]').each(function (i) {

            var border = $(this).attr('id')
            var delayed = $(this).attr('data-delayed')
            var $target = $(`#${border}`)

            if (window.scrollY - 50 < $target.offset().top) { // Do not animate elements above view
                setTimeout(function () {
                    $(`#${border} [data-spy="item"]`).each(function (i) {

                        // TODO: Link items using data-spy

                        var $item = $(this)
                        var animation = $item.attr('data-animation')
                        var staggered = $item.attr('data-staggered')
                        var timeout = $item.attr('data-timeout')
                        if ($target && animation) {
                            if (window.scrollY >= $target.offset().top - ((window.innerHeight / 4) * 3)) {
                                if (staggered) {
                                    setTimeout(function () {
                                        $item.addClass(`animated ${animation}`).removeClass('invisible')
                                    }, (timeout || 150) * i)
                                } else {
                                    $item.addClass(`animated ${animation}`).removeClass('invisible')
                                }
                            }
                        }
                    })
                }, (event == 'ready' ? (delayed || 0) : 0))
            }

        })
    }

}