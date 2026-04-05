import Link from 'next/link'

export function SiteNavbar() {
  return (
    <header className="site-navbar">
      <div className="site-navbar__inner">
        <Link className="site-navbar__brand" href="/overview">
          <span className="site-navbar__eyebrow">CS184/284 Computer Graphics</span>
          <strong>Final Project</strong>
        </Link>
        <p className="site-navbar__summary">
          Real-Time Multi-Style Rendering and Interactive Style Composition in a Shared 3D Scene
        </p>
      </div>
    </header>
  )
}
