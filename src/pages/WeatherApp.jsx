import React, { useEffect, useState } from 'react'
import { weatherService } from '../services/weatherService'
import { LocationForm } from '../components/LocationForm.jsx'
import { ForcastList } from '../components/ForcastList.jsx'
import { TodayHighlights } from '../components/TodayHighlights.jsx'
import animationData from '../assets/animations/loading.json'
import Lottie from 'react-lottie'

export const WeatherApp = () => {
  const [locSearch, setLocation] = useState('')
  const [forcast, setForcast] = useState('')
  const [isValidLocation, setIsValidLocation] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  }

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
  if (isLoading || !forcast)
    return (
      <div className="loading">
        <Lottie options={defaultOptions} height={350} width={350} />
        <h2>Loading...</h2>
      </div>
    )
  return (
    <main>
      <LocationForm isValidLocation={isValidLocation} onSaveLocation={onSaveLocation} locSearch={locSearch} setLocation={setLocation} />
      <ForcastList forcast={forcast} />
      <TodayHighlights forcast={forcast} />
    </main>
  )
}
