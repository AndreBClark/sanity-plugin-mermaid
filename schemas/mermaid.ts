import {
  defineField,
  defineType,
} from 'sanity';

import Input from '../src/components/Input';

export default defineType({
  title: 'Mermaid graph',
  name: 'mermaid',
  type: 'object',
  fields: [
    defineField({
      type: 'text',
      name: 'definition',
      title: 'Graph definition',
      rows: 200,
      components: {
        input: Input,
      },
    }),
  ],
})
