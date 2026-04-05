export function ProjectTimeline({ items = [] }) {
  return (
    <ol className="paper-timeline">
      {items.map(item => (
        <li className="paper-timeline__item" key={`${item.week}-${item.title}`}>
          <span className="paper-timeline__week">{item.week}</span>
          <div className="paper-timeline__body">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

