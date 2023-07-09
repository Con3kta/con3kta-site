import React from 'react'
import './styles.css'

export default function CustomButton({ text, type, onPress, variant }) {
  return (
    <button 
    type={type ? type : 'button'} 
    className={variant ? variant : 'default'}
    onClick={onPress}
    >
        {text}
    </button>
  )
}
