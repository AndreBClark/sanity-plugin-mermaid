import { MermaidConfig } from 'mermaid';
import { defineType } from 'sanity';

import Input from '../src/components/Input';

export default function(config: MermaidConfig) {
  return defineType({
  title: 'Mermaid graph',
  name: 'mermaid',
  type: 'text',
  components: {
    input: (props) => <Input config={config} {...props} />,
  },
})
}
