import React from 'react'

export const ForcastPreview = ({ day }) => {
  const getDay = () => {
    const date = day.applicable_date.split('-')
    if (date[2] === String(new Date(Date.now()).getDate())) return 'Today'
    else if (date[2] === String(new Date(Date.now()).getDate() + 1)) return 'Tommorow'
    else return date.reverse().join('.')
  }

  return (
    <li className="forcast-preview">
      <h3>{getDay()}</h3>
      <img src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`} alt="img" />
      <div className='temp-container'>
      <div className="temp">
          <h1 className="celsius">{day.min_temp.toFixed(0)} </h1>
          <span>&#176;C</span>
      </div>
      <div className="temp">
          <h1 className="celsius">{day.max_temp.toFixed(0)} </h1>
          <span>&#176;C</span>
      </div>
      </div>
    </li>
  )
}
