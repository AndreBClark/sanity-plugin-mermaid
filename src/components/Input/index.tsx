import React, { useCallback } from 'react';

import {
  set,
  StringInputProps,
  unset,
} from 'sanity';

import {
  Stack,
  Text,
  TextInput,
} from '@sanity/ui';

export default function CustomStringInput(props: StringInputProps) {
  const {onChange, value = '', elementProps } = props
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      onChange(event.currentTarget.value ? set(event.currentTarget.value) : unset()),
    [onChange]
  )
  return (
    <Stack space={3}>
      <TextInput {...elementProps} onChange={handleChange} value={value} />
      <Text size={1}>Characters: {value?.length || 0}</Text>
    </Stack>
  )
}