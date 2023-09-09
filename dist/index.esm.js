import { set, unset, defineType, defineField, definePlugin } from 'sanity';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useCallback, useState, useEffect, useRef } from 'react';
import { TextInput, Badge, ThemeProvider, Stack } from '@sanity/ui';
import mermaid$1 from 'mermaid';
function Input(props) {
  const {
    elementProps,
    onChange,
    value = ""
  } = props;
  const handleChange = useCallback(event => {
    const nextValue = event.currentTarget.value;
    onChange(nextValue ? set(nextValue) : unset());
  }, [onChange]);
  return /* @__PURE__ */jsx(TextInput, {
    ...elementProps,
    onChange: handleChange,
    value
  });
}
function useMermaid() {
  let graph = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  let id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "mermaid";
  let options = arguments.length > 2 ? arguments[2] : undefined;
  const [svg, setSvg] = useState();
  useEffect(() => {
    mermaid$1.mermaidAPI.initialize({
      startOnLoad: true,
      theme: (options == null ? void 0 : options.theme) || "neutral"
    });
  }, []);
  useEffect(() => {
    try {
      mermaid$1.parse(graph);
      mermaid$1.mermaidAPI.render(id, graph, new HTMLDivElement());
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
  const ref = useRef();
  useEffect(() => {
    const content = valid ? html : "";
    if (ref.current) {
      ref.current.innerHTML = content;
    }
  }, [valid, html]);
  return /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx("div", {
      id
    }, "faux"), /* @__PURE__ */jsx("div", {
      ref
    }, "preview"), !valid && /* @__PURE__ */jsx(Badge, {
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
  const handleChange = useCallback(event => onChange(event.currentTarget.value ? set(event.currentTarget.value) : unset()), [onChange]);
  return /* @__PURE__ */jsx(ThemeProvider, {
    children: /* @__PURE__ */jsxs(Stack, {
      space: 3,
      children: [/* @__PURE__ */jsx(Input, {
        ...elementProps,
        onChange: handleChange,
        value,
        ref
      }), /* @__PURE__ */jsx(Mermaid, {
        graph: value
      })]
    })
  });
}
var mermaidSchema = defineType({
  title: "Mermaid graph",
  name: "mermaid",
  type: "object",
  fields: [defineField({
    type: "text",
    name: "definition",
    title: "Graph definition",
    components: {
      field: Field
    }
  })]
});
const mermaid = definePlugin(function () {
  let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    name: "sanity-plugin-mermaid",
    schema: {
      types: [mermaidSchema]
    }
  };
});
export { mermaid };
//# sourceMappingURL=index.esm.js.map
