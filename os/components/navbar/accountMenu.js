import $ from "jquery";

export function accountMenu() {
  Mmenu.configs.classNames.selected = "active";
  Mmenu.configs.offCanvas.page.selector = "#accountMenu";

  document.addEventListener("DOMContentLoaded", () => {
    const menu = new Mmenu("#accountMenu", {
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
        "position-bottom",
        "pagedim-black",
        "position-front"
      ]
    });
  });
}
