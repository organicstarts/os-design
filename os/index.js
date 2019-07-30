import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import mmenu from "mmenu-js/dist/mmenu";
import slick from "slick-carousel";
import lazyload from "vanilla-lazyload";
import { footer, getArticles } from "./components/footer/footer";
import { navbar, scrollNav } from "./components/navbar/navbar";
import { sidebar } from "./components/navbar/sidebar";
import { accountBar } from "./components/navbar/accountbar";
import { carousel } from "./components/carousel/carousel";
import { getItems } from "./API/getItems";
import {
  populateSideNav,
  populateAccountNav
} from "./populateHTML/populateNav";
import { alert } from "./components/alert/alert";

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
  getItems,
  populateSideNav,
  populateAccountNav,
  alert,
  scrollNav
};
