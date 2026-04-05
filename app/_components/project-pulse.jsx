'use client'

export function ProjectPulse({ phase, caption }) {
  return (
    <div className="pulse-card">
      <div className="pulse-card__header">
        <span className="pulse-card__tag">Client-only block</span>
        <strong>{phase}</strong>
      </div>
      <p>{caption}</p>
      <div className="pulse-card__meters" aria-hidden="true">
        <span style={{ width: '84%' }} />
        <span style={{ width: '61%' }} />
        <span style={{ width: '47%' }} />
      </div>
    </div>
  )
}
