import Link from 'next/link'

export function SiteNavbar() {
  return (
    <header className="site-navbar">
      <div className="site-navbar__inner">
        <Link className="site-navbar__brand" href="/">
          <span className="site-navbar__eyebrow">CS184/284 Computer Graphics</span>
          <strong>Final Project</strong>
        </Link>
        <p className="site-navbar__summary">
          Neon Worlds, New Styles
        </p>
      </div>
    </header>
  )
}
