import Master from "./index"

export default class Swipes extends Master {

  constructor() {
    super()
  }

  Swipey(className, options) {
    var elements = document.querySelectorAll(className)
    if (elements) {
      this.forEachElements(elements, function (i, el) {
        var Flickity = require('flickity')
        new Flickity(el, options)
      })
    }
  }

  EasySwipey(className, selector, infinite, speed) {
    var elements = document.querySelectorAll(className)
    if (elements) {
      this.forEachElements(elements, function (i, el) {
        var Flickity = require('flickity')
        new Flickity(el, {
          cellAlign: 'left',
          cellSelector: selector || '.carousel-cell',
          lazyLoad: true,
          wrapAround: infinite || false,
          autoPlay: speed || false
        })
      })
    }
  }

  Products() {
    var elements = document.querySelectorAll('.product-carousel')
    if (elements) {
      super.forEachElements(elements, function (i, el) {
        var Flickity = require('flickity')
        new Flickity(el, {
          adaptiveHeight: false,
          autoPlay: 5000,
          cellAlign: 'left',
          cellSelector: '.product-slide',
          contain: true,
          lazyLoad: true,
          pageDots: false,
          wrapAround: true
        })
      })
    }
  }

  Categories() {
    const $ = require('jquery')

    $('.categories-carousel').slick({
      mobileFirst: true,
      autoplay: false,
      infinite: true,
      swipeToSlide: true,
      touchThreshold: 10,
      lazyLoad: "ondemand",
      variableWidth: true,
      adaptiveHeight: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 2559,
          settings: {
            centerMode: false,
            centerPadding: "1rem",
            slidesToShow: 6
          }
        },
        {
          breakpoint: 1440,
          settings: {
            centerMode: true,
            centerPadding: "2.5rem",
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1024,
          settings: {
            centerMode: true,
            centerPadding: "2rem",
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            centerPadding: "1.5rem",
            slidesToShow: 3
          }
        },
        {
          breakpoint: 425,
          settings: {
            centerMode: true,
            centerPadding: "1rem",
            slidesToShow: 2
          }
        },
        {
          breakpoint: 0,
          settings: {
            swipeToSlide: false,
            centerMode: true,
            centerPadding: "0px",
            slidesToShow: 1
          }
        }
      ]
    })
  }

}