import _ from "lodash"

import bootstrap from "bootstrap/dist/js/bootstrap.bundle"
import mmenu from "mmenu-js/dist/mmenu"
import lazyload from "vanilla-lazyload"
import slick from "slick-carousel"

export default class Master {
    constructor(version) {
        this.jQuery = require('jquery')
    }
    
    combineObj(obj, variable) {
        for (let key of Object.keys(obj)) {
            if (!variable[key]) variable[key] = {};
        
            for (let innerKey of Object.keys(obj[key]))
            variable[key][innerKey] = obj[key][innerKey];
        }
    }
    
    forEachElements(array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
            callback.call(scope, i, array[i])
        }
    }

    Swal(options) {
        const Swal = require('sweetalert2')
        let config = {
            customClass: {
                confirmButton: `${options.type}-button`
            }
        }
        Swal.fire(Object.assign( {}, config, options ))
    }
}