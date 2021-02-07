import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueRouter from "vue-router";
import routes from "./routes";
import "./assets/css/style.css";
Vue.use(VueRouter);

Vue.config.productionTip = false;

var filter = function(text, length, clamp) {
  clamp = clamp || "...";
  var node = document.createElement("div");
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter("truncate", filter);

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
