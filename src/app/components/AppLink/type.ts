export interface AppLinkProps {
  href: string
  children: React.ReactNode
  target?: 'self' | 'blank' | 'parent' | 'top'
  makeButton?: boolean
}
export interface LinkTargets {
  self: string
  blank: string
  parent: string
  top: string
}
