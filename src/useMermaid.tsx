import { useEffect } from 'react';

import mermaid from 'mermaid';

export default function useMermaid(graph = '', id = 'mermaid', options: Record<string, any>) {
  const emptyReturn = [false, ''];
  const element = document.querySelector(`#${id}`)
  if (!element) return emptyReturn
  if (!mermaid.parse(graph)) return emptyReturn;

  useEffect(() => {
    mermaid.mermaidAPI.initialize({
      startOnLoad: true,
      theme: options?.theme || 'neutral',
    })
  }, [])

  const {svg, bindFunctions} = mermaid.render(id, graph)
  element.innerHTML = svg

  useEffect(
    () => bindFunctions?.(element),
    [graph]
  )

  return [svg !== '', svg || '']
}
