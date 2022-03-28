import axios from 'axios'
import config from '../config'

const { 
  baseURL,
  projectId,
  projectToken,
  userToken
} = config

const axiosInstance = () => {
  const axiosConfiguration: object = {
    baseURL: baseURL,
    params: {
      project_id: projectId,
      project_token: projectToken,
      token: userToken
    }
  }
  
  if (!projectToken || !(projectId && userToken)) {
    const csrfToken: string | undefined | null = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')
    const headers: object = { 'X-CSRF-Token': csrfToken }

    Object.assign(axiosConfiguration, { headers })
  }

  return axios.create({ 
    ...axiosConfiguration
  })
}

export default axiosInstance()
