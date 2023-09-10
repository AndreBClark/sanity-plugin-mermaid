'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var sanity = require('sanity');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var mermaid$1 = require('mermaid');
var ui = require('@sanity/ui');
function _interopDefaultCompat(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    default: e
  };
}
var React__default = /*#__PURE__*/_interopDefaultCompat(React);
var mermaid__default = /*#__PURE__*/_interopDefaultCompat(mermaid$1);
const DEFAULT_DARK_THEME = 'dark';
const DEFAULT_LIGHT_THEME = 'default';
const DARK_THEME_KEY = 'dark';
const LIGHT_THEME_KEY = 'light';
const HTML_THEME_ATTRIBUTE = 'data-theme';
/**
 * Gets the theme based on config and current data-theme of the HTML.
 *
 * @param html The HTML element of the page.
 * @param config The configuration for this chart.
 */
function getTheme(html, config) {
  var _html$getAttribute, _ref, _config$theme$htmlThe, _config$theme, _config$mermaid;
  let htmlTheme = (_html$getAttribute = html.getAttribute(HTML_THEME_ATTRIBUTE)) !== null && _html$getAttribute !== void 0 ? _html$getAttribute : LIGHT_THEME_KEY;
  if (!(htmlTheme === LIGHT_THEME_KEY || htmlTheme === DARK_THEME_KEY)) {
    htmlTheme = LIGHT_THEME_KEY;
  }
  const defaultTheme = htmlTheme === LIGHT_THEME_KEY ? DEFAULT_LIGHT_THEME : DEFAULT_DARK_THEME;
  return (_ref = (_config$theme$htmlThe = config === null || config === void 0 || (_config$theme = config.theme) === null || _config$theme === void 0 ? void 0 : _config$theme[htmlTheme]) !== null && _config$theme$htmlThe !== void 0 ? _config$theme$htmlThe : config === null || config === void 0 || (_config$mermaid = config.mermaid) === null || _config$mermaid === void 0 ? void 0 : _config$mermaid.theme) !== null && _ref !== void 0 ? _ref : defaultTheme;
}

/**
 * Copyright (c) Samuel Wall.
 *
 * This source code is licensed under the MIT license found in the
 * license file in the root directory of this source tree.
 */
/**
 * Component to display Mermaid diagrams.
 *
 * @param param0 Diagram to display.
 * @param param1 Config.
 * @returns The component.
 */
const Mermaid = _ref2 => {
  let {
    chart,
    config: configSrc
  } = _ref2;
  // Mermaid doesn't support server-side rendering
  /* istanbul ignore next */
  if (typeof window === 'undefined') {
    return React__default.default.createElement("div", {
      className: "mermaid",
      "data-mermaid-src": chart
    }, chart);
  }
  const config = React.useMemo(() => typeof configSrc === 'string' ? JSON.parse(configSrc) : configSrc, [configSrc]);
  const html = document.querySelector('html');
  const [rerender, setRerender] = React.useState(false);
  const theme = React.useMemo(() => getTheme(html, config), [config, rerender]);
  React.useEffect(() => {
    const observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (mutation.type !== 'attributes' || mutation.attributeName !== 'data-theme') {
          continue;
        }
        setRerender(cur => !cur);
        break;
      }
    });
    observer.observe(html, {
      attributes: true
    });
    return () => {
      try {
        observer.disconnect();
      } catch {
        // Do nothing
      }
    };
  }, []);
  React.useEffect(() => {
    if (config) {
      if (config.mermaid) {
        mermaid__default.default.initialize({
          startOnLoad: true,
          ...config.mermaid,
          theme
        });
      } else {
        mermaid__default.default.initialize({
          startOnLoad: true,
          theme
        });
      }
      document.querySelectorAll('div.mermaid[data-processed="true"]').forEach(v => {
        v.removeAttribute('data-processed');
        v.innerHTML = v.getAttribute('data-mermaid-src');
      });
      mermaid__default.default.contentLoaded();
    }
  }, [config, theme]);
  React.useEffect(() => {
    setTimeout(mermaid__default.default.contentLoaded, 0);
  }, [chart]);
  return React__default.default.createElement("div", {
    className: "mermaid",
    "data-mermaid-src": chart
  }, chart);
};
function Input(props, ref) {
  const {
    elementProps,
    onChange
  } = props;
  const [value, setValue] = React.useState(props.value || "");
  const handleChange = React.useCallback(event => {
    const nextValue = event.currentTarget.value;
    setValue(nextValue);
    onChange(nextValue ? sanity.set(nextValue) : sanity.unset());
  }, [onChange]);
  React.useEffect(() => {
    setValue(value);
  }, [setValue]);
  return /* @__PURE__ */jsxRuntime.jsxs(ui.ThemeColorProvider, {
    children: [/* @__PURE__ */jsxRuntime.jsx(ui.TextArea, {
      ...elementProps,
      onChange: handleChange,
      value,
      ref
    }), /* @__PURE__ */jsxRuntime.jsx(ui.Flex, {
      justify: "center",
      height: "fill",
      children: /* @__PURE__ */jsxRuntime.jsx(Mermaid, {
        chart: value
      }, value)
    })]
  });
}
const WrappedInput = React.forwardRef(Input);
var mermaidSchema = sanity.defineType({
  title: "Mermaid graph",
  name: "mermaid",
  type: "object",
  fields: [sanity.defineField({
    type: "text",
    name: "definition",
    title: "Graph definition",
    rows: 200,
    components: {
      input: WrappedInput
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
