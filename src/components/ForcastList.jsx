import React from 'react'
import { ForcastPreview } from './ForcastPreview.jsx'

export const ForcastList = ({ forcast }) => {
  return (
    <section className="forcast-list">
      <h2>{forcast.title}</h2>
      <ul>
        {forcast.consolidated_weather.map((day) => (
          <ForcastPreview key={day.id} day={day} />
        ))}
      </ul>
    </section>
  )
}
