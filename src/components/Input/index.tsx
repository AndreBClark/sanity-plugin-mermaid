import { useCallback } from 'react';

import {
  set,
  StringInputProps,
  unset,
} from 'sanity';

import { TextInput } from '@sanity/ui';

export default function Input(props: StringInputProps) {
  const {elementProps, onChange, value = ''} = props

  const handleChange = useCallback(
    (event: { currentTarget: { value: any; }; } ) => {
      const nextValue = event.currentTarget.value
      onChange(nextValue ? set(nextValue) : unset())
    },
    [onChange],
  )

  return (
      <TextInput {...elementProps} onChange={handleChange} value={value} />
  )
}
