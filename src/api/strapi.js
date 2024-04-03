import { sendRequest } from './axios'


export const postConfig = async (body) => {
  try {
    const config = {
      method: 'put',
      url: `/puck-configs/2`,
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

export const getConfig = async (id) => {
  try {
    const config = {
      method: 'get',
      url: `/puck-configs/${id}`,
    }
    const response = await sendRequest(config)
    return response.data
  }
  catch (error) {
    console.log(error.message)
    console.error(error.message, error.error)
  }
}