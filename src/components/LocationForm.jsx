import React from 'react'

export const LocationForm = ({ isValidLocation, onSaveLocation, locSearch ,setLocation }) => {

  return (
    <form onSubmit={onSaveLocation}>
      <input onChange={(e) => setLocation(e.target.value)} type="text" name="location" value={locSearch} />
      <button>Search</button>
      {console.log(isValidLocation)}
      {!isValidLocation ? <p>Location not found.</p> : <p>dfsdf</p>}
    </form>
  )
}
