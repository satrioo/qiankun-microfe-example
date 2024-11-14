import "./assets/main.css";
import { createApp, type App as VueApp } from "vue"; // Assuming you're using Vue 3
import App from "./App.vue";
import router from "./router";
import {
  renderWithQiankun,
  qiankunWindow,
  type QiankunProps,
} from "vite-plugin-qiankun/dist/helper";

let app: VueApp<Element>;

const render = (container: any) => {
  app = createApp(App);
  app.use(router).mount(container ? container.querySelector("#app") : "#app");
};

const initQianKun = () => {
  renderWithQiankun({
    mount(props: QiankunProps) {
      const { container } = props;
      render(container);
    },
    bootstrap() {
      // Optional initialization logic can go here
    },
    unmount() {
      if (app) {
        app.unmount();
      }
    },
    update: function (props: QiankunProps): void | Promise<void> {
      throw new Error("Function not implemented.");
    },
  });
};

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render();
