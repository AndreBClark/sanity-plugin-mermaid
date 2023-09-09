import {
  useEffect,
  useState,
} from 'react';

import mermaid from 'mermaid';

export default function useMermaid(graph = '', id = 'mermaid', options?:  Record<string,any>) {
  const [svg, setSvg] = useState<Element>()

  useEffect(() => {
    mermaid.mermaidAPI.initialize({
      startOnLoad: true,
      theme: options?.theme || 'neutral',
    })
  }, [])

  useEffect(() => {
    try {
      mermaid.parse(graph)
      mermaid.mermaidAPI.render(
        id,
        graph,
        new HTMLDivElement
      )
    } catch (err) {

    }
  }, [graph, setSvg])

  return [svg || '']
}
