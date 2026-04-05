import { PlaygroundShowcase } from './app/_components/playground-showcase'
import { ProjectPulse } from './app/_components/project-pulse'
import { ProjectTimeline } from './app/_components/project-timeline'
import { getBaseMDXComponents } from './lib/mdx-base-components'

const customComponents = {
  PlaygroundShowcase,
  ProjectPulse,
  ProjectTimeline
}

export function useMDXComponents(components) {
  return getBaseMDXComponents({
    ...customComponents,
    ...components
  })
}

