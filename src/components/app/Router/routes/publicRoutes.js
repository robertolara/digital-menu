import Home from "components/pages/Home";
import BusinessMenu from "components/pages/BusinessMenu";

const publicRoutes = [
  {
    name: "home",
    route: "/",
    component: Home,
  },
  {
    name: "menu",
    route: "/menu",
    component: BusinessMenu,
  },
];

export default publicRoutes;