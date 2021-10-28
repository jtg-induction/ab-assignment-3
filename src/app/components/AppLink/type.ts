export interface AppLinkProps {
  href: string
  children: any
  target?: 'self' | 'blank' | 'parent' | 'top'
  makeButton?: boolean
}
