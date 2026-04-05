'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Banner } from 'nextra/components'
import { useEffect, useState } from 'react'
import { navigationLinks } from './navigation-links'

export function ScrollBanner() {
  const [hidden, setHidden] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const currentY = window.scrollY
      const scrollingDown = currentY > lastY

      if (currentY < 96) {
        setHidden(false)
      } else {
        setHidden(scrollingDown)
      }

      lastY = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`navigator-banner${hidden ? ' is-hidden' : ''}`}>
      <Banner
        className="navigator-banner__surface"
        dismissible={false}
        storageKey="project-navigator-v1"
      >
        <div className="navigator-banner__content">
          <span className="navigator-banner__label">Navigator</span>
          <nav aria-label="Page Navigator" className="navigator-banner__nav">
            {navigationLinks.map(link => (
              <Link
                className={`navigator-banner__link${
                  pathname === link.href ? ' is-active' : ''
                }`}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Banner>
    </div>
  )
}
