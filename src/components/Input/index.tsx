import {
  ChangeEvent,
  forwardRef,
  Ref,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { Mermaid } from 'mdx-mermaid/lib/Mermaid';
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

function Input(props: StringInputProps, ref: Ref<HTMLTextAreaElement>) {
  const {elementProps, onChange } = props;
  const [value, setValue] = useState(props.value || '');
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const nextValue = event.currentTarget.value;
      setValue(nextValue);
      onChange(nextValue
        ? set(nextValue)
        : unset())
    },
    [onChange],
  );
  useEffect(()=> {
    setValue(value);
  }, [setValue])

  return (
    <ThemeColorProvider>
      <TextArea {...elementProps} onChange={handleChange} value={value} ref={ref} />
      <Flex justify="center" height="fill">
        <Mermaid key={value} chart={value} />
      </Flex>
    </ThemeColorProvider>
  )
}
const WrappedInput = forwardRef(Input);
export default WrappedInput;