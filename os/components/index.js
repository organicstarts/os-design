import _ from "lodash"

import bootstrap from "bootstrap/dist/js/bootstrap.bundle"
import mmenu from "mmenu-js/dist/mmenu"
import lazyload from "vanilla-lazyload"
import slick from "slick-carousel"

export default class Master {
    constructor() {
        this.jQuery = require('jQuery')
    }

    forEachElements(array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
            callback.call(scope, i, array[i])
        }
    }
}