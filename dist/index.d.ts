import {Plugin as Plugin_2} from 'sanity'

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
export declare const mermaidCharts: Plugin_2<void | mermaidChartsConfig>

declare interface mermaidChartsConfig {}

export {}
