import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import mmenu from "mmenu-js/dist/mmenu";
import slick from "slick-carousel";
import lazyload from "vanilla-lazyload";
import { footer, getArticles } from "./components/footer/footer";
import { navbar, scrollNav } from "./components/navbar/navbar";
import { sidebar } from "./components/navbar/sidebar";
import { dropdown } from "./components/navbar/dropdown";
import { cartMenu } from "./components/navbar/cartMenu";
import { accountMenu } from "./components/navbar/accountMenu";
import { carousel } from "./components/carousel/carousel";
import { scrollSpy } from "./components/scrollspy/scrollSpy";
import { getItems } from "./API/getItems";
import {
  populateSideNav,
  populateAccountNav,
  populateCartNav
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
  accountMenu,
  carousel,
  scrollSpy,
  getItems,
  populateSideNav,
  populateAccountNav,
  populateCartNav,
  alert,
  scrollNav,
  cartMenu,
  dropdown
};
