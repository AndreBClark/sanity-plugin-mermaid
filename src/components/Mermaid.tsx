import {
  MutableRefObject,
  useEffect,
  useRef,
} from 'react';

import { Badge } from '@sanity/ui';

import useMermaid from '../useMermaid';

export default function Mermaid ({
  graph,
  id,
  options = {},
  fallback = 'Invalid graph definition'
}: Record<string, any>) {
  const [valid, html] = useMermaid(graph, id, options)
  const ref: MutableRefObject<any> = useRef()

  useEffect(() => {
    const content = valid ? html : ''
    if (ref.current) {
      ref.current.innerHTML = content
    }
  }, [valid, html])

  return (
    <>
      <div key="faux" id={id} />
      <div key='preview' ref={ref} />
      {!valid && <Badge color='warning'>{fallback}</Badge>}
    </>
  )
}