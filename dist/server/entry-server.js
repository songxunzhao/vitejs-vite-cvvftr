"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var vueRouter = require("vue-router");
var path = require("path");
var vuex = require("vuex");
var App_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_router_link = vue.resolveComponent("router-link");
  const _component_router_view = vue.resolveComponent("router-view");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          vue.createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`| `);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/about" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          vue.createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_router_view, null, {
    default: vue.withCtx(({ Component }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        serverRenderer.ssrRenderSuspense(_push2, {
          default: () => {
            serverRenderer.ssrRenderVNode(_push2, vue.createVNode(vue.resolveDynamicComponent(Component), null, null), _parent2, _scopeId);
          },
          _: 2
        });
      } else {
        return [
          (vue.openBlock(), vue.createBlock(vue.Suspense, null, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(Component)))
            ]),
            _: 2
          }, 1024))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const pages = { "./pages/About.vue": () => Promise.resolve().then(function() {
  return About$1;
}), "./pages/External.vue": () => Promise.resolve().then(function() {
  return External$1;
}), "./pages/Home.vue": () => Promise.resolve().then(function() {
  return Home$1;
}), "./pages/Store.vue": () => Promise.resolve().then(function() {
  return Store$1;
}) };
const routes = Object.keys(pages).map((path2) => {
  const name = path2.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase();
  return {
    path: name === "/home" ? "/" : name,
    component: pages[path2]
  };
});
function createRouter() {
  return vueRouter.createRouter({
    history: vueRouter.createMemoryHistory(),
    routes
  });
}
function createApp() {
  const app = vue.createSSRApp(App);
  const router = createRouter();
  app.use(router);
  return { app, router };
}
async function render(url, manifest) {
  const { app, router } = createApp();
  router.push(url);
  await router.isReady();
  const ctx = {};
  const html = await serverRenderer.renderToString(app, ctx);
  const preloadLinks = renderPreloadLinks(ctx.modules, manifest);
  return [html, preloadLinks];
}
function renderPreloadLinks(modules, manifest) {
  let links = "";
  const seen = /* @__PURE__ */ new Set();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          const filename = path.basename(file);
          if (manifest[filename]) {
            for (const depFile of manifest[filename]) {
              links += renderPreloadLink(depFile);
              seen.add(depFile);
            }
          }
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}
function renderPreloadLink(file) {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else if (file.endsWith(".woff")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
  } else if (file.endsWith(".woff2")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
  } else if (file.endsWith(".gif")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/gif">`;
  } else if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`;
  } else if (file.endsWith(".png")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/png">`;
  } else {
    return "";
  }
}
var button = "";
var Button = vue.defineComponent({
  setup() {
    return () => {
      return vue.createVNode("div", {
        class: "btn"
      }, "dynamicBtn");
    };
  }
});
var _sfc_main$5 = {
  data() {
    return {
      bread: {
        fox: 1
      }
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  var _a;
  _push(`<p${serverRenderer.ssrRenderAttrs(_attrs)}>import type should be removed without side-effect${serverRenderer.ssrInterpolate((_a = _ctx.bread) == null ? void 0 : _a.fox)}</p>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ImportType.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var ImportType = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
var ImportType$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ImportType
}, Symbol.toStringTag, { value: "Module" }));
var About_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = {
  async setup() {
    const url = typeof document === "undefined" ? new (require("url")).URL("file:" + __filename).href : document.currentScript && document.currentScript.src || new URL("entry-server.js", document.baseURI).href;
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
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = vue.resolveComponent("Button");
  const _component_ImportType = vue.resolveComponent("ImportType");
  _push(`<!--[--><h1 data-v-2550b21d>${serverRenderer.ssrInterpolate($setup.msg)}</h1><p class="import-meta-url" data-v-2550b21d>${serverRenderer.ssrInterpolate($setup.url)}</p>`);
  _push(serverRenderer.ssrRenderComponent(_component_Button, null, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`CommonButton`);
      } else {
        return [
          vue.createTextVNode("CommonButton")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_ImportType, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/About.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var About = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-2550b21d"]]);
var About$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": About
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>Example external component content</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("example-external-component/ExampleExternalComponent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var ExampleExternalComponent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  components: {
    ExampleExternalComponent
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ExampleExternalComponent = vue.resolveComponent("ExampleExternalComponent");
  _push(serverRenderer.ssrRenderComponent(_component_ExampleExternalComponent, _attrs, null, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/External.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var External = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
var External$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": External
}, Symbol.toStringTag, { value: "Module" }));
var _imports_0 = "/assets/logo.03d6d6da.png";
var foo = { msg: "hi" };
const msg = "[success] from conventional virtual file";
var Home_vue_vue_type_style_index_0_scoped_true_lang = "";
function __variableDynamicImportRuntime0__(path2) {
  switch (path2) {
    case "../components/ImportType.vue":
      return Promise.resolve().then(function() {
        return ImportType$1;
      });
    default:
      return new Promise(function(resolve, reject) {
        (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path2)));
      });
  }
}
const _sfc_main$1 = {
  __ssrInlineRender: true,
  setup(__props) {
    const ImportType2 = load("ImportType");
    function load(file) {
      return vue.defineAsyncComponent(() => __variableDynamicImportRuntime0__(`../components/${file}.vue`));
    }
    const url = typeof document === "undefined" ? new (require("url")).URL("file:" + __filename).href : document.currentScript && document.currentScript.src || new URL("entry-server.js", document.baseURI).href;
    const protocol = new URL(url).protocol;
    const state = vue.reactive({
      count: 0,
      protocol,
      url
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 data-v-69d88d32>Home</h1><p data-v-69d88d32><img${serverRenderer.ssrRenderAttr("src", _imports_0)} alt="logo" data-v-69d88d32></p><button data-v-69d88d32>count is: ${serverRenderer.ssrInterpolate(vue.unref(state).count)}</button><p class="virtual" data-v-69d88d32>msg from virtual module: ${serverRenderer.ssrInterpolate(vue.unref(foo).msg)}</p><p class="inter" data-v-69d88d32>this will be styled with a font-face</p><p class="import-meta-url" data-v-69d88d32>${serverRenderer.ssrInterpolate(vue.unref(state).url)}</p><p class="protocol" data-v-69d88d32>${serverRenderer.ssrInterpolate(vue.unref(state).protocol)}</p><p class="nested-virtual" data-v-69d88d32>msg from nested virtual module: ${serverRenderer.ssrInterpolate(vue.unref(msg))}</p>`);
      _push(serverRenderer.ssrRenderComponent(vue.unref(Button), null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`CommonButton`);
          } else {
            return [
              vue.createTextVNode("CommonButton")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div data-v-69d88d32> encrypted message: <p class="encrypted-msg" data-v-69d88d32></p></div>`);
      _push(serverRenderer.ssrRenderComponent(vue.unref(ImportType2), null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Home.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Home = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-69d88d32"]]);
var Home$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Home
}, Symbol.toStringTag, { value: "Module" }));
var Store_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  async setup() {
    const store = vuex.createStore({
      state: {
        foo: "bar"
      }
    });
    return store.state;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(_attrs)} data-v-056cb602>${serverRenderer.ssrInterpolate(_ctx.foo)}</h1>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Store.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Store = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-056cb602"]]);
var Store$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Store
}, Symbol.toStringTag, { value: "Module" }));
exports.render = render;
