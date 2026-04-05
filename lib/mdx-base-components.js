import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'

const themeComponents = getThemeComponents()

export function getBaseMDXComponents(components = {}) {
  return {
    ...themeComponents,
    ...components
  }
}

