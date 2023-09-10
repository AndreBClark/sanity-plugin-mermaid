import {
  MutableRefObject,
  useEffect,
  useRef,
} from 'react';

import { Badge } from '@sanity/ui';

import useMermaid from '../useMermaid';

const InvalidChart = () => {
  return <Badge color="warning">Invalid graph definition</Badge>
}

export default function Mermaid ({
  graph,
  id,
  options = {},
}: Record<string, any>) {
  const [valid, html] = useMermaid(graph, id, options)
  const ref: MutableRefObject<any> = useRef()

  useEffect(() => {
    const content = valid ? html : ''
    if (ref.current) {
      ref.current.innerHTML = content
    }
  }, [valid, html])

  return <div key="preview" ref={ref} />
}