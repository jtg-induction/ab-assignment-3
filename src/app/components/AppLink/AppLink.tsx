import React from 'react'
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
      style={
        makeButton
          ? {
              textDecoration: 'none',
              padding: '10px',
              background: 'transparent',
              border: '1px solid',
              backgroundColor: 'skyblue',
              color: 'white',
            }
          : {}
      }
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
