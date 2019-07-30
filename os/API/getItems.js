import $ from "jquery";

export function getItems() {
  return new Promise((resolve, reject) => {
    let babywash = [];
    let diaper = [];
    let oil = [];
    let lotion = [];
    let dental = [];
    let sunscreen = [];
    let repellant = [];
    let balm = [];
    $.get("https://brainiac.organicstart.com/os/getcategories")
      .then((resData, status) => {
        for (let res in resData) {
          resData[res].map(data => {
            if (!data.name.includes("Organic Start")) {
              data.categories.map(categoryNum => {
                switch (categoryNum) {
                  case 97:
                    appendInfo(data, diaper);
                    break;
                  case 102:
                    appendInfo(data, babywash);
                    break;
                  case 103:
                    appendInfo(data, oil);
                    break;
                  case 104:
                    appendInfo(data, lotion);
                    break;
                  case 105:
                    appendInfo(data, dental);
                    break;
                  case 106:
                    appendInfo(data, sunscreen);
                    break;
                  case 107:
                    appendInfo(data, repellant);
                    break;
                  case 108:
                    appendInfo(data, balm);
                    break;
                  default:
                    break;
                }
              });
            }
          });
        }
      })
      .then(x => {
        $(babywash.join("")).appendTo("#babywash .babywash");
        $(oil.join("")).appendTo("#oil .oil");
        $(lotion.join("")).appendTo("#lotion .lotion");
        $(dental.join("")).appendTo("#dental .dental");
        $(sunscreen.join("")).appendTo("#sunscreen .sunscreen");
        $(repellant.join("")).appendTo("#repellant .repellant");
        $(diaper.join("")).appendTo("#diapers .diapers");
        $(balm.join("")).appendTo("#balms .balms");
        resolve();
      });
  });
}

function spliceName(name) {
  if (!name.includes(":")) return "";
  let word = name.split(": ")[1];

  let newName = word.includes(" - ") ? word.split("-")[0] : word.split("(")[0];
  let option = word.includes(" - ") ? word.split("-")[1] : "";
  let count = `${word.split("(")[1]}`;

  return { newName, count };
}

function getBrand(brandUrl) {
  if (brandUrl.includes("mambino")) return "Mambino Organics";
  if (brandUrl.includes("bambo")) return "Bambo Nature";
  if (brandUrl.includes("earth-mama")) return "Earth Mama Organic";
  if (brandUrl.includes("lafes")) return "Lafe's Natural Bodycare";
  if (brandUrl.includes("natures-paradise")) return "Natures Paradise";
  if (brandUrl.includes("lac-larde")) return "Lac Larde";
  if (brandUrl.includes("babo")) return "Babo Botanicals";
  if (brandUrl.includes("green-goo")) return "Green Goo";
  if (brandUrl.includes("jack-n-jill")) return "Jack N' Jill";
  if (brandUrl.includes("radius")) return "RADIUS";
  if (brandUrl.includes("znya")) return "ZNYA Organics";
  else return "";
}
function appendInfo(data, htmlArray) {
  // const productInfo = babyproducts;
  // if (!productInfo[0][data.id]) {
  //   console.log(data);
  //   return;
  // }
  const nameObj = spliceName(data.name);
  if (data.is_visible) {
    htmlArray.push(`
          <div class="ui baby-care text-center card">
              <a href="https://organicstart.com${data.custom_url}">
                  <img src="${
                    data.primary_image.standard_url
                  }" class="img-fluid center-block"/>
                  <div class="text-wrapper">
                      <div class="center">
                          <p class="brand text-center">${getBrand(
                            data.custom_url
                          )}</p>
                          <p class="name text-center"><strong>${
                            nameObj.newName
                          }</strong></p>
                          ${nameObj.option ? `<p>${nameObj.option}</p>` : ``}
                      </div>
                  </div>
                  <p class="price">$${parseFloat(data.calculated_price).toFixed(
                    2
                  )}</p>
              </a>
              <div class="crdBtns text-center">
                  ${
                    data.inventory_level === 0
                      ? `<a href="https://organicstart.com${
                          data.custom_url
                        }" class="ui black basic circular icon vertical animated cart button">
                              <div class="hidden content">Out of Stock</div>
                              <div class="visible content">
                                  <i class="material-icons">&#xE928;</i>
                              </div>
                          </a>`
                      : `<a href="https://organicstart.com/cart.php?action=add&product_id=${
                          data.id
                        }" class="ui green inverted circular icon vertical animated cart button" data-product-id="${
                          data.id
                        }">
                              <div class="hidden content">Add to Cart</div>
                              <div class="visible content">
                                  <i class="material-icons">add_shopping_cart</i>
                              </div>
                          </a>`
                  }
              </div>
          </div>
          `);
  }
}
