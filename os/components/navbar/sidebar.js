export function sidebar() {
  Mmenu.configs.classNames.selected = "active";
  Mmenu.configs.offCanvas.page.selector = "#wrapper";

  document.addEventListener("DOMContentLoaded", () => {
    const menu = new Mmenu("#mainMobileMenu", {
      navbar: {
        title: ""
      },
      navbars: [
        {
          content: ["breadcrumbs", "close"]
        }
      ],
      slidingSubmenus: false,
      extensions: ["pagedim-black"]
    });
  });
}
