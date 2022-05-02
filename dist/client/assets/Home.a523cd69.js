import { _ as _export_sfc, g as defineAsyncComponent, h as reactive, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, u as unref, b as createVNode, w as withCtx, F as Fragment, p as pushScopeId, i as popScopeId, d as createTextVNode, j as __vitePreload } from "./index.b22595c5.js";
import { B as Button } from "./button.ed50e9c0.js";
var _imports_0 = "/assets/logo.03d6d6da.png";
var foo = { msg: "hi" };
const msg = "[success] from conventional virtual file";
var Home_vue_vue_type_style_index_0_scoped_true_lang = "";
function __variableDynamicImportRuntime0__(path) {
  switch (path) {
    case "../components/ImportType.vue":
      return __vitePreload(() => import("./ImportType.11bc1506.js"), true ? ["assets/ImportType.11bc1506.js","assets/index.b22595c5.js","assets/index.b988c137.css"] : void 0);
    default:
      return new Promise(function(resolve, reject) {
        (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
      });
  }
}
const _withScopeId = (n) => (pushScopeId("data-v-69d88d32"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "Home", -1));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: "logo"
  })
], -1));
const _hoisted_3 = { class: "virtual" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "inter" }, "this will be styled with a font-face", -1));
const _hoisted_5 = { class: "import-meta-url" };
const _hoisted_6 = { class: "protocol" };
const _hoisted_7 = { class: "nested-virtual" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode("CommonButton");
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createTextVNode(" encrypted message: "),
  /* @__PURE__ */ createBaseVNode("p", { class: "encrypted-msg" })
], -1));
const _sfc_main = {
  setup(__props) {
    const ImportType = load("ImportType");
    function load(file) {
      return defineAsyncComponent(() => __variableDynamicImportRuntime0__(`../components/${file}.vue`));
    }
    const url = document.querySelector(".import-meta-url").textContent;
    const protocol = new URL(url).protocol;
    const state = reactive({
      count: 0,
      protocol,
      url
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        _hoisted_2,
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = ($event) => unref(state).count++)
        }, "count is: " + toDisplayString(unref(state).count), 1),
        createBaseVNode("p", _hoisted_3, "msg from virtual module: " + toDisplayString(unref(foo).msg), 1),
        _hoisted_4,
        createBaseVNode("p", _hoisted_5, toDisplayString(unref(state).url), 1),
        createBaseVNode("p", _hoisted_6, toDisplayString(unref(state).protocol), 1),
        createBaseVNode("p", _hoisted_7, "msg from nested virtual module: " + toDisplayString(unref(msg)), 1),
        createVNode(unref(Button), null, {
          default: withCtx(() => [
            _hoisted_8
          ]),
          _: 1
        }),
        _hoisted_9,
        createVNode(unref(ImportType))
      ], 64);
    };
  }
};
var Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-69d88d32"]]);
export { Home as default };
