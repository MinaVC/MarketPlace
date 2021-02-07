import Home from "./components/Home";
import Details from "./components/Details";

const routes = [
  { path: "/", component: Home },
  { path: "/details/:id", component: Details, props: true },
];
export default routes;
