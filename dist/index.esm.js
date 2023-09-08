import { set, unset, defineType, defineField, definePlugin } from 'sanity';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useCallback } from 'react';
import { Stack, TextInput, Text } from '@sanity/ui';
function CustomStringInput(props) {
  const {
    onChange,
    value = "",
    elementProps
  } = props;
  const handleChange = useCallback(event => onChange(event.currentTarget.value ? set(event.currentTarget.value) : unset()), [onChange]);
  return /* @__PURE__ */jsxs(Stack, {
    space: 3,
    children: [/* @__PURE__ */jsx(TextInput, {
      ...elementProps,
      onChange: handleChange,
      value
    }), /* @__PURE__ */jsxs(Text, {
      size: 1,
      children: ["Characters: ", (value == null ? void 0 : value.length) || 0]
    })]
  });
}
var mermaid = defineType({
  title: "Mermaid graph",
  name: "mermaid",
  type: "object",
  fields: [defineField({
    type: "text",
    name: "definition",
    title: "Graph definition",
    components: {
      input: CustomStringInput
    }
  })]
});
const mermaidCharts = definePlugin(function () {
  let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    name: "sanity-plugin-mermaid-charts",
    schema: {
      types: [mermaid]
    }
  };
});
export { mermaidCharts };
//# sourceMappingURL=index.esm.js.map
