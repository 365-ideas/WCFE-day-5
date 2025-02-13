import Link from 'next/link'
import React from 'react'

import s from './LinkAnim.module.scss'

export const LinkAnim = ({href, classes = "", text, ...rest}) => {
  return (
    <Link href={href} className={`${s.link_anim} ${classes}`} {...rest}>
      <p className={`${s.text_wrapper} ${classes}`} aria-label={text}>
        {text && text.split("").map((word, index) => (
          <span className={s.text} key={index} style={{ transitionDelay: `${(index / text.split("").length) * 0.06}s` }}>
            {word !== " " ? word : (<>&nbsp;</>)}
          </span>
        ))}
      </p>
    </Link>
  )
}
