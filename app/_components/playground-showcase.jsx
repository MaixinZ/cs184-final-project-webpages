'use client'

import { Playground } from 'nextra/components'
import { getBaseMDXComponents } from '../../lib/mdx-base-components'
import { ProjectPulse } from './project-pulse'

const playgroundSource = `
<div className="paper-card paper-card--playground">
  <span className="paper-label">Playground</span>
  <h3>Client-only preview zone</h3>
  <p>
    This block is rendered with Nextra's built-in Playground component, so it is
    ready to host interactive notes, embedded media captions, or live demo
    callouts later in the semester.
  </p>
  <ProjectPulse
    phase="Prototype drop area"
    caption="Swap this out later with comparison videos, mesh snapshots, or simulation checkpoints."
  />
</div>
`

export function PlaygroundShowcase() {
  return (
    <Playground
      components={getBaseMDXComponents({ ProjectPulse })}
      fallback={<div className="paper-card paper-card--playground">Loading playground...</div>}
      source={playgroundSource}
    />
  )
}
