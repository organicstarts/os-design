import $ from "jquery";

/*
HTML tags to grab from cornerstone template.
__dirname/templates/component/products/card.html
    <a href="" data-event-type="product-click" data-src="{{add_to_cart_url}}" class="clicky button button--small card-figcaption-button">{{lang 'products.add_to_cart'}}</a>

__dirname/templates/components/common/navigation.html
     <li class="navUser-item navUser-item--cart">
            <a
                class="navUser-action"
                data-cart-preview
                data-dropdown="cart-preview-dropdown"
                data-options="align:right"
                href="{{urls.cart}}">
                <span class="navUser-item-cartLabel">{{lang 'common.cart'}}</span> <span class="countPill cart-quantity"></span>
            </a>
            ...
*/

export function addToCart() {
  $(".clicky").on("click", function() {
    const url = $(this).data("src");
    $.get(url).then(x => {
      console.log(x);
      const num =
        +$(".countPill.cart-quantity.countPill--positive")[0].innerHTML + 1;
      $(".countPill.cart-quantity.countPill--positive")[0].innerHTML = num;
    });
    e.preventDefault();
  });
}
