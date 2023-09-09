import { useCallback } from 'react';

import {
  set,
  unset,
} from 'sanity';

import {
  Stack,
  ThemeProvider,
} from '@sanity/ui';

import Input from '../Input';
import Mermaid from '../Mermaid';

export default function Field(props: any, ref: any,) {
  const {elementProps, onChange, value = ''} = props;
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      onChange(event.currentTarget.value ? set(event.currentTarget.value) : unset()),
    [onChange],
  )
  return (
    <ThemeProvider>
      <Stack space={3}>
        <Input {...elementProps} onChange={handleChange} value={value} ref={ref}   />
        <Mermaid graph={value}  />
      </Stack>
    </ThemeProvider>
  )
}