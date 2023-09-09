import {
  defineField,
  defineType,
} from 'sanity';

import Field from '../src/components/Field';

export default defineType({
  title: 'Mermaid graph',
  name: 'mermaid',
  type: 'object',
  fields: [
    defineField({
      type: 'text',
      name: 'definition',
      title: 'Graph definition',
      components: {
        field: Field
      },
    }),
  ],
})
