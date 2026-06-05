import React from 'react'
import './Button.scss'

const Button = ({
    children,
    type="button",
    className="",
    ...props
}) => {
  return (
    <button className={`className common-btn`} {...props}>
      {children}
    </button>
  )
}

export default Button