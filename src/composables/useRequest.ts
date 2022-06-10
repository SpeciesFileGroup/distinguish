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
    baseURL: baseURL.value,
    params: {
      project_id: projectId?.value,
      project_token: projectToken?.value,
      token: userToken?.value
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