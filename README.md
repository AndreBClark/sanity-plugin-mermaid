# sanity-plugin-mermaid

> This is a **Sanity Studio v3** plugin.

## Installation

```sh
npm install sanity-plugin-mermaid-input
```

```sh
pnpm add sanity-plugin-mermaid-input
```

```sh
yarn add sanity-plugin-mermaid-input
```

## Usage

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
import {defineConfig} from 'sanity'
import {Mermaid} from 'sanity-plugin-mermaid-input'

export default defineConfig({
  //...
  plugins: [
    // no config required
    Mermaid(),

    // alternative you can edit the config or theme here
    Mermaid({
      theme: "dark"
    })
  ],
})
```

Use as an input type in the schema for your documents or objects

```ts
export default defineType({
  type: "document",
  title: "Slideshow",
  name: "slideshow",
  fields: [
    // ... other fields
    defineField({
      type: "mermaid",
      name: "chart",
      title: "Flowchart",
    })
  ]
})

```

## Configuration

you can use mermaidJS [configuration options](https://mermaid.js.org/config/schema-docs/config.html)

## Dependencies

Uses [mdx-mermaid](https://github.com/sjwall/mdx-mermaid#readme)'s Mermaid Component to render the charts

## License

[MIT](LICENSE) © Andre Clark

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.

##