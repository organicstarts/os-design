import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import mmenu from "mmenu-js/dist/mmenu";
import slick from "slick-carousel";
import lazyload from "vanilla-lazyload";
import { footer, getArticles } from "./components/footer/footer";
import { navbar, sidebar, accountBar } from "./components/navbar/navbar";
import { carousel } from "./components/carousel/carousel";
import { getBabyWash } from "./API/babywash";
export {
  mmenu,
  slick,
  lazyload,
  footer,
  bootstrap,
  getArticles,
  navbar,
  sidebar,
  accountBar,
  carousel,
  getBabyWash
};
