import { Footer, Layout } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { DM_Sans, Newsreader, Shadows_Into_Light } from 'next/font/google'
import { getPageMap } from 'nextra/page-map'
import { ScrollBanner } from './_components/scroll-banner'
import { SiteNavbar } from './_components/site-navbar'
import 'nextra-theme-docs/style.css'
import './global.css'

const bodyFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body'
})

const displayFont = Newsreader({
  subsets: ['latin'],
  variable: '--font-display'
})

const noteFont = Shadows_Into_Light({
  subsets: ['latin'],
  variable: '--font-note',
  weight: '400'
})

export const metadata = {
  title: {
    default: 'Final Project',
    template: '%s | CS284 Computer Graphics'
  },
  description:
    'A Nextra-based showcase shell for a CS284 final project.'
}

const footer = (
  <Footer className="site-footer">
    <span>CS284 Final Project Showcase</span>
    <span>Power by Nextra.</span>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html
      className="light"
      dir="ltr"
      lang="zh-CN"
      suppressHydrationWarning
    >
      <Head faviconGlyph="✦">
        <meta content="#f0e2cc" name="theme-color" />
      </Head>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${noteFont.variable}`}
      >
        <Layout
          banner={<ScrollBanner />}
          editLink={null}
          feedback={{ content: null }}
          footer={footer}
          navbar={<SiteNavbar />}
          navigation={false}
          nextThemes={{ defaultTheme: 'light', forcedTheme: 'light' }}
          pageMap={await getPageMap()}
          search={null}
          sidebar={{
            autoCollapse: true,
            defaultMenuCollapseLevel: 1,
            defaultOpen: false,
            toggleButton: false
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
