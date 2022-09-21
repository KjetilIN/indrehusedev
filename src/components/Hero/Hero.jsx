import React from 'react'
import { HeroGraphics } from './HeroGraphics'
import { HeroTxt } from './HeroTxt'

export const Hero = () => {
  
  return (
    <div className='pt-24 pb-[20%] bg-sec md:flex md:justify-center md:items-center'>
        <HeroTxt/>
        <HeroGraphics/>
    </div>
  )
}
