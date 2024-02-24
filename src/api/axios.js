import axios from 'axios'

import { STRAPI_KEY, STRAPI_URL } from '../config'

// Axios instance with default configuration
const instance = axios.create({
  baseURL: STRAPI_URL, // Replace with your API's base URL
  timeout: 5000, // Adjust the timeout as needed
  headers: {
    Authorization: `Bearer ${STRAPI_KEY}`,
    Accept: 'application/json'
  }
})

// Function to handle API requests and format responses
export const sendRequest = async (config) => {
  try {
    const response = await instance(config)
    return response.data
  } catch (error) {
    return {
      status: error?.response?.status || 500,
      message: 'An error occurred while processing your request',
      data: {},
      error: error.message || 'Unknown error',
    }
  }
}
