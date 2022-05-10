import React from 'react'
import animationData from '../assets/animations/loading.json'
import Lottie from 'react-lottie'
import { ForcastPreview } from './ForcastPreview.jsx'

export const ForcastList = ({ forcast, isLoading }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  }

  return (
    <section className="forcast-list">
      {!forcast || isLoading ? (
        <div className="loading">
          <Lottie options={defaultOptions} height={150} width={150} />
          <h2>Loading...</h2>
        </div>
      ) : (
        <>
          <h2>{forcast.title}</h2>
          <ul>
          {forcast.consolidated_weather.map((day) =>
            <ForcastPreview key={day.id} day={day}/>
            )}
            </ul>
        </>
      )}
    </section>
  )
}


