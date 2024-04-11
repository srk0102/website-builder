import { sendRequest } from './axios'
import qs from 'qs'


export const postConfig = async (body) => {
  try {
    const config = {
      method: 'post',
      url: `/puck-configs`,
      data: { data: body }
    }
    const response = await sendRequest(config)
    return response.data
  }
  catch (error) {
    console.log(error.message)
    console.error(error.message, error.error)
  }
}

export const putConfig = async (body, id) => {
  try {
    const config = {
      method: 'put',
      url: `/puck-configs/${id}`,
      data: { data: body }
    }
    const response = await sendRequest(config)
    return response.data
  }
  catch (error) {
    console.log(error.message)
    console.error(error.message, error.error)
  }
}

export const getConfig = async (configId, path) => {
  try {
    const query = qs.stringify({
      filters: {
        configId: {
          $eq: configId,
        },
        path: {
          $eq: path,
        }
      },
    }, {
      encodeValuesOnly: true,
    });
    const config = {
      method: 'get',
      url: `/puck-configs?${query}`,
    }
    const response = await sendRequest(config)
    return response.data
  }
  catch (error) {
    console.log(error.message)
    console.error(error.message, error.error)
  }
}