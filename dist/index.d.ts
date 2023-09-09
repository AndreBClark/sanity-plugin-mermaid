import {Plugin as Plugin_2} from 'sanity'

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {myPlugin} from 'sanity-plugin-mermaid'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [myPlugin()],
 * })
 * ```
 */
export declare const mermaid: Plugin_2<void | mermaidConfig>

declare interface mermaidConfig {}

export {}
