# sanity-plugin-mermaid-charts

> This is a **Sanity Studio v3** plugin.

## Installation

```sh
npm install sanity-plugin-mermaid-charts
```

## Usage

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
import {defineConfig} from 'sanity'
import {myPlugin} from 'sanity-plugin-mermaid-charts'

export default defineConfig({
  //...
  plugins: [myPlugin({})],
})
```

## License

[MIT](LICENSE) © AndreBClark<andre@cosmicdivision.dev>

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.

# sanity-plugin-mermaid

Add a [Mermaid](https://mermaid-js.github.io/mermaid/) graph input type for [Sanity CMS](http://sanity.io)

Read more about [using the plugin in this blog post](https://raymondjulin.com/blog/drawing-diagrams-in-sanity-with-mermaid-js)

![Screenshot](/sanity-plugin-mermaid.png)

```js
sanity install mermaid
```

Then use it in your schema:

```js
export default {
  name: 'graph',
  title: 'Graph',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      type: 'mermaid',
    },
  ],
}
```

In order to render in your frontend you need to manually use the mermaid package.

## TODO

- [ ] Write a helper package providing a serialiser for portable text
- [ ] Link to mermaid docs in editor
- [ ] Syntax highlighted editor
