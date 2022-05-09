import axios from 'axios'

export const weatherService = {
  getLocation,
  getForcast
}

const BASE_URL = 'https://www.metaweather.com/api/location/'
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com'
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`


async function getLocation(location) {
  try {
    const res = await axios(`${REQUEST_URL}/search/?query=${location}`)
    return res.data
  } catch(err) {
    console.error(err)
  }
}

async function getForcast(woeid) {
    try {
      const res = await axios(`${REQUEST_URL}/${woeid}`)
      return res.data
    } catch(err) {
      console.error(err)
    }
  }

  

