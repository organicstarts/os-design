import $ from "jquery";

export function cartMenu() {
  Mmenu.configs.classNames.selected = "active";
  Mmenu.configs.offCanvas.page.selector = "#cartMenu";

  document.addEventListener("DOMContentLoaded", () => {
    const menu = new Mmenu("#cartMenu", {
      offCanvas: true,
      navbar: {
        title: ""
      },
      navbars: [
        {
          position: "top",
          content: ["close"]
        }
      ],
      slidingSubmenus: false,
      extensions: [
        // "fullscreen",
        "position-right",
        "pagedim-black"
      ]
    });
  });

  $("#CartDrawer").on("click", function() {
    $.get("http://localhost:3000/api/storefront/cart")
      .then(data => {
        const tempData = [];
        tempData.push({
          lineItems: {
            physicalItems: [
              {
                brand: "Hipp",
                couponAmount: 0,
                discountAmount: 0,
                discounts: [],
                extendedListPrice: 36.99,
                extendedSalePrice: 36.99,
                giftWrapping: null,
                id: "3bdc6b30-0509-4ec4-88e2-b3270868278a",
                imageUrl:
                  "https://cdn11.bigcommerce.com/s-od28hnj6la/products/97/images/294/hipp-kindermilch-1__23582__15457.1517412804.190.285.jpg?c=2",
                isShippingRequired: true,
                isTaxable: true,
                listPrice: 36.99,
                name:
                  "HiPP 1+ Years Combiotic Childrens' Milk (Kindermilch) Formula (600g)",
                parentId: null,
                productId: 97,
                quantity: 1,
                salePrice: 36.99,
                sku: "HP1P",
                type: "physical",
                url:
                  "https://sandbox54.mybigcommerce.com/hipp-1-plus-combiotic-milk-formula/",
                variantId: 69
              }
            ]
          }
        });
        // if (data.length < 1) {
        //   $("#cartItems")[0].innerHTML = "your cart is empty";
        // } else {
        const cartHTML = parseData(tempData);
        $("#cartItems")[0].innerHTML = cartHTML;
        // }
      })
      .catch(err => console.log(err.message));
  });
}

function parseData(data) {
  let htmlArray = ["<ul>"];
  console.log(data);
  data[0].lineItems.physicalItems.map(el => {
    htmlArray.push(
      `<li><img src=${el.imageUrl} alt="product/>${el.brand} ${el.name} ${el.salePrice} x ${
        el.quantity
      }</li>`
    );
  });
  htmlArray.push("</ul>");
  console.log(htmlArray);
  return htmlArray.join("");
}
