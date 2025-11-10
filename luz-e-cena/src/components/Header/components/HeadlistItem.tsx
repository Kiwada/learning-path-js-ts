import React from 'react'
import style from "Header.module.css";

const Headlistitem = ({children,
    
}:React.LiHTMLAttributes<HTMLElement>) => {
  return ( <ul className={style.item}>{children}</ul>
  )
}

export default Headlistitem
