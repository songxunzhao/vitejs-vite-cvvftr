import { e as defineComponent, b as createVNode } from "./index.b22595c5.js";
var button = "";
var Button = defineComponent({
  setup() {
    return () => {
      return createVNode("div", {
        class: "btn"
      }, "dynamicBtn");
    };
  }
});
export { Button as B };
