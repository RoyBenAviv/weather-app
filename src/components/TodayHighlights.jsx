import React from 'react'

export const TodayHighlights = ({ forcast }) => {
  return (
    <section className="today-highlights">
      <h2>Today's Highlights</h2>

      <ul className='highlights-list'>
            <li>
                <h3>Wind Status</h3>
                <h1><span>{forcast.consolidated_weather[0].wind_speed.toFixed(0)}</span>mph</h1>
                <h3>{forcast.consolidated_weather[0].wind_direction_compass}</h3>
            </li>
            <li>
                <h3>Humidity</h3>
                <h1><span>{forcast.consolidated_weather[0].humidity}</span>%</h1>
                <div className='humidity-bar'>
                    <div className='percentage'><p>0</p> <p>50</p> <p>100</p></div>
                    <div style={{width: forcast.consolidated_weather[0].humidity * 250 / 100}} className='bar'></div>
                </div>
            </li>
            <li>
                <h3>Visibility</h3>
                <h1><span>{forcast.consolidated_weather[0].visibility.toFixed(0)}</span>miles</h1>
            </li>
            <li>
                <h3>Air Pressure</h3>
                <h1><span>{forcast.consolidated_weather[0].air_pressure}</span>mb</h1>
            </li>
      </ul>
    </section>
  )
}
