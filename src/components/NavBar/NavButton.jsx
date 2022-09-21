import React from 'react'

export const NavButton = (props) => {
  return (
    <button className='flex items-center justify-center bg-orangetheme rounded-md h-7 m-3'>
        <h4 className='text-main text-xl text-jost m-3'>{props.text}</h4>
    </button>
  )
}
