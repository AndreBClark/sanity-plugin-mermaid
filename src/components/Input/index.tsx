import {
  ChangeEvent,
  forwardRef,
  Ref,
  useCallback,
  useState,
} from 'react';

// import Mermaid from '../Mermaid';
import { Mermaid } from 'mdx-mermaid/lib/Mermaid';
import { MermaidConfig } from 'mermaid';
import {
  set,
  StringInputProps,
  unset,
} from 'sanity';

import {
  Flex,
  TextArea,
  ThemeColorProvider,
} from '@sanity/ui';

interface MermaidStringInput extends StringInputProps{
  config: MermaidConfig;
}

function Input(props: MermaidStringInput, ref: Ref<HTMLTextAreaElement>) {
  const {elementProps, onChange, config } = props;
  const mermaidConfig = {
    mermaid: config
  }
  const [value, setValue] = useState(props.value || '')
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const nextValue = event.currentTarget.value
      setValue(nextValue)
      onChange(nextValue ? set(nextValue) : unset())
    },
    [onChange],
  );



  return (
    <ThemeColorProvider>
      <TextArea {...elementProps} onChange={handleChange} value={value} ref={ref} />
      <Flex justify="center" height="fill">
        <Mermaid key={value} chart={value} config={mermaidConfig} />
      </Flex>
    </ThemeColorProvider>
  )
}
const WrappedInput = forwardRef(Input);
export default WrappedInput;