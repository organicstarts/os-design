import $ from "jquery";

export function dropdown() {
  $('[data-toggle="dropdown"]').each(function() {
    const id = $(this).attr("id");
    $(`#${id}`).mouseenter(function() {
        $(`#${id} > div`).removeClass("d-none")
    });
    $(`#${id}`).mouseleave(function() {
        $(`#${id} > div`).addClass("d-none")
    });
  });
}
