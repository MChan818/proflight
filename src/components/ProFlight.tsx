import React from 'react'

import logo from './img/logo.png'
import left_arrow from './img/left.png'
import right_arrow from './img/right.png'
import './ProFlight.css'

const ProFlight = () => {
    let arrayExample = [logo,logo,logo,logo];
    const [roulette, setRoulette] = React.useState<number>(0)

    const handleRoulette = (action:number, length:number) =>{
      if(action === 1){
        if(roulette === length-1){
          return setRoulette(0);
        } else{
          return setRoulette(prev => prev + 1);
        }
      }
      if(action === -1){
        if(roulette === 0){
          return setRoulette(length-1);
        } else{
          return setRoulette(prev => prev - 1);
        }
      }
    }

  return (
    <section className='proflight-container'>
      <div onClick={()=>{handleRoulette(-1,arrayExample.length)}} className='arrow-container'>
        <img src={left_arrow} alt="Left Arrow" className='arrow'/>
      </div>
      {arrayExample.map((e,index)=>{
        if(roulette === index){
          return(
            <>
            <img src={e} alt="Logo" key={index} className='logo active'/>
            </>
          )
        } else{
          return(
            <>
            <img src={e} alt="Logo" key={index} className='logo'/>
            </>
          )
        }
      })}
      <div onClick={()=>{handleRoulette(1,arrayExample.length)}} className='arrow-container'>
        <img src={right_arrow} alt="Right Arrow" className='arrow'/>
      </div>
    </section>
  )
}

export default ProFlight