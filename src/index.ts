import { definePlugin } from 'sanity';

import mermaidSchema from '../schemas/mermaid';

interface mermaidConfig {
  /* nothing here yet */
}

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
export const mermaid = definePlugin<mermaidConfig | void>((config = {}) => {
  return {
    name: 'sanity-plugin-mermaid',
    schema: {
      types: [mermaidSchema],
    },
  }
})
