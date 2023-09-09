'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var sanity = require('sanity');
var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var ui = require('@sanity/ui');
var mermaid$1 = require('mermaid');
function _interopDefaultCompat(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    default: e
  };
}
var mermaid__default = /*#__PURE__*/_interopDefaultCompat(mermaid$1);
function Input(props) {
  const {
    elementProps,
    onChange,
    value = ""
  } = props;
  const handleChange = react.useCallback(event => {
    const nextValue = event.currentTarget.value;
    onChange(nextValue ? sanity.set(nextValue) : sanity.unset());
  }, [onChange]);
  return /* @__PURE__ */jsxRuntime.jsx(ui.TextInput, {
    ...elementProps,
    onChange: handleChange,
    value
  });
}
function useMermaid() {
  let graph = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  let id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "mermaid";
  let options = arguments.length > 2 ? arguments[2] : undefined;
  const [svg, setSvg] = react.useState();
  react.useEffect(() => {
    mermaid__default.default.mermaidAPI.initialize({
      startOnLoad: true,
      theme: (options == null ? void 0 : options.theme) || "neutral"
    });
  }, []);
  react.useEffect(() => {
    try {
      mermaid__default.default.parse(graph);
      mermaid__default.default.mermaidAPI.render(id, graph, new HTMLDivElement());
    } catch (err) {}
  }, [graph, setSvg]);
  return [svg || ""];
}
function Mermaid(_ref) {
  let {
    graph,
    id,
    options = {},
    fallback = "Invalid graph definition"
  } = _ref;
  const [valid, html] = useMermaid(graph, id, options);
  const ref = react.useRef();
  react.useEffect(() => {
    const content = valid ? html : "";
    if (ref.current) {
      ref.current.innerHTML = content;
    }
  }, [valid, html]);
  return /* @__PURE__ */jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */jsxRuntime.jsx("div", {
      id
    }, "faux"), /* @__PURE__ */jsxRuntime.jsx("div", {
      ref
    }, "preview"), !valid && /* @__PURE__ */jsxRuntime.jsx(ui.Badge, {
      color: "warning",
      children: fallback
    })]
  });
}
function Field(props, ref) {
  const {
    elementProps,
    onChange,
    value = ""
  } = props;
  const handleChange = react.useCallback(event => onChange(event.currentTarget.value ? sanity.set(event.currentTarget.value) : sanity.unset()), [onChange]);
  return /* @__PURE__ */jsxRuntime.jsx(ui.ThemeProvider, {
    children: /* @__PURE__ */jsxRuntime.jsxs(ui.Stack, {
      space: 3,
      children: [/* @__PURE__ */jsxRuntime.jsx(Input, {
        ...elementProps,
        onChange: handleChange,
        value,
        ref
      }), /* @__PURE__ */jsxRuntime.jsx(Mermaid, {
        graph: value
      })]
    })
  });
}
var mermaidSchema = sanity.defineType({
  title: "Mermaid graph",
  name: "mermaid",
  type: "object",
  fields: [sanity.defineField({
    type: "text",
    name: "definition",
    title: "Graph definition",
    components: {
      field: Field
    }
  })]
});
const mermaid = sanity.definePlugin(function () {
  let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    name: "sanity-plugin-mermaid",
    schema: {
      types: [mermaidSchema]
    }
  };
});
exports.mermaid = mermaid;
//# sourceMappingURL=index.js.map
