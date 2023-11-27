//src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import TestUi from "zsl-ui-test"; //引入包
import "../node_modules/zsl-ui-test/zsl-ui.css"; //引入包样式
const app = createApp(App);
app.config.globalProperties.public = TestUi.publicjs; //公共方法
app.use(TestUi.install); //注册组件
app.mount("#app");
