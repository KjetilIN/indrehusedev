import React from 'react'
import Typewriter from 'typewriter-effect'

export const HeroTxt = () => {
  const keyWords = ["Developer","Programmer", "Data Engineer","Designer","Student"];


  return (
    <div className='m-8 md:flex-col'>
        <h2 className='text-jost text-main text-3xl md:text-4xl'>Hi, 🙌</h2>
        <h1 className='text-jost text-main text-4xl md:text-5xl'>I'm Kjetil Indrehus.</h1>
        <Typewriter options={{
            wrapperClassName:"text-darkMain text-xl md:text-3xl",
            strings:keyWords,
            autoStart:true,
            loop:true,
        }
        }/>
    </div>
  )
}
