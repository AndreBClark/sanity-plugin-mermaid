import { definePlugin } from 'sanity';

import mermaid from '../schema/mermaid';

interface mermaidChartsConfig {
  /* nothing here yet */
}

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {mermaidCharts} from 'sanity-plugin-mermaid-charts'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [mermaidCharts()],
 * })
 * ```
 */

export const mermaidCharts = definePlugin<mermaidChartsConfig | void>((config = {}) => {
  return {
    name: 'sanity-plugin-mermaid-charts',
    schema: {
      types: [mermaid],
    }
  }
})
