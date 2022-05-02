import { B as Button } from "./button.ed50e9c0.js";
import ImportType from "./ImportType.11bc1506.js";
import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as createVNode, w as withCtx, F as Fragment, d as createTextVNode } from "./index.b22595c5.js";
var About_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  async setup() {
    const url = document.querySelector(".import-meta-url").textContent;
    return {
      msg: "About",
      url
    };
  },
  components: {
    ImportType,
    Button
  }
};
const _hoisted_1 = { class: "import-meta-url" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("CommonButton");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  const _component_ImportType = resolveComponent("ImportType");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("h1", null, toDisplayString($setup.msg), 1),
    createBaseVNode("p", _hoisted_1, toDisplayString($setup.url), 1),
    createVNode(_component_Button, null, {
      default: withCtx(() => [
        _hoisted_2
      ]),
      _: 1
    }),
    createVNode(_component_ImportType)
  ], 64);
}
var About = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2550b21d"]]);
export { About as default };
