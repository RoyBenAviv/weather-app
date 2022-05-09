import React, { useEffect, useState } from 'react'
import { weatherService } from '../services/weatherService'
import { LocationForm } from '../components/LocationForm.jsx'
import { ForcastPreview } from '../components/ForcastPreview.jsx'

export const WeatherApp = () => {
  const [locSearch, setLocation] = useState('')
  const [forcast, setForcast] = useState('')
  const [isValidLocation, setIsValidLocation] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    loadLocation()
  }, [])

  const loadLocation = async () => {
    const location = await weatherService.getLocation('helsinki')
    const forcast = await weatherService.getForcast(location[0].woeid)
    setForcast(forcast)
  }

  const onSaveLocation = async (ev) => {
    ev.preventDefault()
    const location = await weatherService.getLocation(locSearch)
    if (!location.length || !location) return setIsValidLocation(false)
    else setIsValidLocation(true)

    setIsLoading(true)
    const forcast = await weatherService.getForcast(location[0].woeid)
    setForcast(forcast)
    setIsLoading(false)
  }

  return (
    <main>
      <LocationForm isValidLocation={isValidLocation} onSaveLocation={onSaveLocation} locSearch={locSearch} setLocation={setLocation} />
      <ForcastPreview forcast={forcast} isLoading={isLoading} />
    </main>
  )
}
