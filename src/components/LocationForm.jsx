import React from 'react'

export const LocationForm = ({ isValidLocation, onSaveLocation, locSearch ,setLocation }) => {

  return (
    <form className='location-form' onSubmit={onSaveLocation}>
      <div className='input-container'>
      <input onChange={(e) => setLocation(e.target.value)} type="text" name="location" value={locSearch} placeholder="Search for places!"/>
      <button className='search-btn'>Search</button>

      </div>
      {!isValidLocation ? <p>Location not found.</p>: ''}
    </form>
  )
}
