import { useAPIConfig } from '@/composables/useAPIConfig'
import axios from 'axios'

export const useRequest = (instanceConfiguration: object = {}) => {
  const { 
    baseURL,
    projectId,
    projectToken,
    userToken,
    csrfToken
  } = useAPIConfig()

  const axiosConfiguration: object = {
    baseURL: baseURL,
    params: {
      project_id: projectId,
      project_token: projectToken,
      token: userToken
    },
    ...instanceConfiguration
  }
  
  if (!projectToken || !(projectId && userToken)) {
    const headers: object = { 'X-CSRF-Token': csrfToken }

    Object.assign(axiosConfiguration, { headers })
  }

  return axios.create({ 
    ...axiosConfiguration
  })
}