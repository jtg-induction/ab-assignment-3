import React from 'react'
import { AppLinkProps } from './type'

export const AppLink: React.FC<AppLinkProps> = (props) => {
  const { href, children } = props
  return <a href={href}>{children}</a>
}
