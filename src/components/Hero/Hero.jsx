import React from 'react'
import { HeroGraphics } from './HeroGraphics'
import { HeroTxt } from './HeroTxt'

export const Hero = () => {
  
  return (
    <div className='py-24  md:flex md:justify-center md:items-center'>
        <HeroTxt/>
        <HeroGraphics/>
    </div>
  )
}
