import { sendRequest } from './axios'

/**
 *
 * @param {Number} id optional dependency, pass only if you want to fetch id details.
 * @returns {Object}
 */
export const getNav = async (id) => {
  try {
    const config = {
      method: 'get',
      url: `/nav-bars${id ? '/'+id : ''}`,
    }

    const response = await sendRequest(config)
    return response.data
  }
  catch (error) {
    console.log(error.message)
    console.error(error.message, error.error)
  }
}

/**
 * 
 * @param {Number} id
 * @returns {Object}
 */
export const getFooter = async (id) => {
  try {
    const config = {
      method: 'get',
      url: `/footers${id ? '/' + id : ''}`,
    }

    const response = await sendRequest(config)
    return response.data
  }
  catch (error) {
    console.log(error.message)
    console.error(error.message, error.error)
  }
}