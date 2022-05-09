import React from 'react'
import animationData from '../assets/animations/loading.json'
import Lottie from 'react-lottie'
export const ForcastPreview = ({ forcast, isLoading }) => {

  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData    
    }


  return (
    <section className='forcast-preview'>
      {!forcast || isLoading ? <div>
        <Lottie options={defaultOptions} height={400} width={400} />
        <h2>Loading...</h2>

      </div> : 
      
      
      <>
      <h2>{forcast.title}</h2>
      <img src={`https://www.metaweather.com/static/img/weather/${forcast.consolidated_weather[0].weather_state_abbr}.svg`} alt="img" />
        <h1>{forcast.consolidated_weather[0].the_temp}</h1>
      </>
      }

    </section>
  )
}