'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var sanity = require('sanity');
var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var ui = require('@sanity/ui');
function CustomStringInput(props) {
  const {
    onChange,
    value = "",
    elementProps
  } = props;
  const handleChange = react.useCallback(event => onChange(event.currentTarget.value ? sanity.set(event.currentTarget.value) : sanity.unset()), [onChange]);
  return /* @__PURE__ */jsxRuntime.jsxs(ui.Stack, {
    space: 3,
    children: [/* @__PURE__ */jsxRuntime.jsx(ui.TextInput, {
      ...elementProps,
      onChange: handleChange,
      value
    }), /* @__PURE__ */jsxRuntime.jsxs(ui.Text, {
      size: 1,
      children: ["Characters: ", (value == null ? void 0 : value.length) || 0]
    })]
  });
}
var mermaid = sanity.defineType({
  title: "Mermaid graph",
  name: "mermaid",
  type: "object",
  fields: [sanity.defineField({
    type: "text",
    name: "definition",
    title: "Graph definition",
    components: {
      input: CustomStringInput
    }
  })]
});
const mermaidCharts = sanity.definePlugin(function () {
  let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    name: "sanity-plugin-mermaid-charts",
    schema: {
      types: [mermaid]
    }
  };
});
exports.mermaidCharts = mermaidCharts;
//# sourceMappingURL=index.js.map
