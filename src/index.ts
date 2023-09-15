import { MermaidConfig } from 'mermaid';
import { definePlugin } from 'sanity';

import mermaidSchema from '../schemas/mermaid';

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {MermaidInput} from 'sanity-plugin-mermaid'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [MermaidInput()],

 * })
 * ```
 */
export const defaultConfig: MermaidConfig = {
  theme: 'dark',
  darkMode: true,
};

export const mermaid = definePlugin<MermaidConfig | void>((userConfig = {}) => {
  const config: MermaidConfig= {...defaultConfig, ...userConfig};
  return {
    name: 'sanity-plugin-mermaid',
    schema: {
      types: [mermaidSchema(config)],
    },
  }
})