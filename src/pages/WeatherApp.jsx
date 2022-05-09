import React, { useEffect, useState } from 'react'
import { weatherService } from '../services/weatherService'


export const WeatherApp = () => {

    const [locSearch , setLocation] = useState('')
    const [forcast, setForcast] = useState('')

    useEffect(() => {
        loadLocation()
    }, [])

    const loadLocation = async () => {
        const location = await weatherService.getLocation("helsinki")
        const forcast = await weatherService.getForcast(location[0].woeid)
        // setLocation(location[0].title)
        setForcast(forcast)
        console.log('forcast',forcast);
    }


    const onSaveLocation = async () => {
        const location = await weatherService.getLocation(locSearch)
        const forcast = await weatherService.getForcast(location[0].woeid)
        // setLocation(location[0].title)
        setForcast(forcast)
        console.log('forcast',forcast);
    }

    return (
        <section>
            <input onChange={e => setLocation(e.target.value)} type="text" name="location" value={locSearch} />
            <button onClick={onSaveLocation}>Search</button>

        </section>
    )

}