import $ from "jquery";

export function accountBar() {
  Mmenu.configs.classNames.selected = "active";
  Mmenu.configs.offCanvas.page.selector = "#my-account";

  document.addEventListener("DOMContentLoaded", () => {
    const menu = new Mmenu("#my-accountmenu", {
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
