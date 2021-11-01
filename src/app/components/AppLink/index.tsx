import { Link } from '@mui/material'
import React from 'react'
import styles from './styles'
import { AppLinkProps, LinkTargets } from './type'

const targets: LinkTargets = {
  self: '_self',
  blank: '_blank',
  parent: '_parent',
  top: '_top',
}

const AppLink: React.FC<AppLinkProps> = (props: AppLinkProps) => {
  const { href, children, target, makeButton } = props
  return (
    <Link
      sx={makeButton ? styles.ButtonStyle : {}}
      href={href}
      target={targets[target ?? 'self']}
    >
      {children}
    </Link>
  )
}
export default AppLink
