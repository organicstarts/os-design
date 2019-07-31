import $ from "jquery";
import _ from "lodash";

function animateScrollSpy() {
    $('[data-spy="scroll"]').each(function (i) {
        var border = $(this).attr('id');
        var $target = $(`#${border}`);
        $(`#${border} [data-spy="item"]`).each(function (i) {
            var $item = $(this);
            var animation = $item.attr('data-animation');
            var staggered = $item.attr('data-staggered');
            var timeout = $item.attr('data-timeout');
            if ($target && animation) {
                    if(window.scrollY >= $target.offset().top - ((window.innerHeight / 4) * 3)) {
                    if (staggered) {
                        setTimeout(function () {
                            $item.addClass(`animated ${animation}`).removeClass('invisible');
                        }, (timeout || 150) * i);
                    } else {
                        $item.addClass(`animated ${animation}`).removeClass('invisible');
                    }
                }
            }
        });
    });
}

export function scrollSpy() {
    $('[data-spy="item"]').each(function () {
        $(this).addClass('invisible');
    });
    if (window.innerWidth >= 425) {
        $(document).ready(function () {
            animateScrollSpy();
        });
        $(window).scroll(function () {
            animateScrollSpy();
        });
    } else {
        $('[data-spy="item"]').each(function () {
            $(this).removeClass('invisible');
        });
    }
}