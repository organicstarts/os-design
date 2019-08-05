import $ from "jquery";

export function categoryCarousel(className) {
  $(`${className}`).slick({
    mobileFirst: true,
    autoplay: true,
    lazyLoad: "ondemand",
    variableWidth: true,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 2559,
        settings: {
          centerMode: false,
          arrows: true,
          centerPadding: "1rem",
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1440,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "2.5rem",
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "2rem",
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "1.5rem",
          slidesToShow: 3
        }
      },
      {
        breakpoint: 425,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "1rem",
          slidesToShow: 2
        }
      },
      {
        breakpoint: 0,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0.5rem",
          slidesToShow: 1
        }
      }
    ]
  });
}

export function carousel(className) {
  $(`${className}`).slick({
    mobileFirst: true,
    autoplay: true,
    cancellable: true,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "45px",
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "45px",
          slidesToShow: 5
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "35px",
          slidesToShow: 3
        }
      },
      {
        breakpoint: 560,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "25px",
          slidesToShow: 2
        }
      },
      {
        breakpoint: 0,
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
