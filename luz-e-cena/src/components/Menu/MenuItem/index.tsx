import React from 'react'
import Link from '../../Link';

interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    href?: string;
}
const MenuItem = ({children , href = '#'}: MenuItemProps) => {
  return (
    <li>
          <Link href={href}>{children}</Link>
    </li>
  )
}

export default MenuItem
