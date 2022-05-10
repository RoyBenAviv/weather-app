import React from 'react'

export const ForcastPreview = ({ day }) => {
  return (
    <li className="forcast-preview">
        {console.log(day)}
      <img src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`} alt="img" />
      <div className="temp">
        <h1 className="celsius">{day.the_temp.toFixed(0)} </h1>
        <span>&#176;C</span>
      </div>
    </li>
  )
}
