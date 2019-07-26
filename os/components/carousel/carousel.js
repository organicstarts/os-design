import $ from "jquery";

export function carousel(className) {
  $(`${className}`).slick({
    mobileFirst: true,
    autoplay: true,
    cancellable: true,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "45px",
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "35px",
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "25px",
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "15px",
          slidesToShow: 1
        }
      }
    ]
  });
}
