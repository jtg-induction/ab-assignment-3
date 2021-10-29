import React from 'react'
import styles from './styles'
import { AppLinkProps } from './type'

const targets = {
  self: '_self',
  blank: '_blank',
  parent: '_parent',
  top: '_top',
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
  const { href, children, target, makeButton } = props
  return (
    <a
      style={makeButton ? styles.ButtonStyle : {}}
      href={href}
      target={targets[target ?? 'self']}
    >
      {children}
    </a>
  )
}
AppLink.defaultProps = {
  target: 'self',
  makeButton: false,
}
