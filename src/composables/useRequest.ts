import { useSettingsStore } from '@/store/settings'
import axios from 'axios'

export const useRequest = (instanceConfiguration: object = {}) => {
  const store = useSettingsStore()
  const { 
    baseURL,
    projectId,
    projectToken,
    userToken,
    csrfToken
  } = store.getAPIConfig

  const axiosConfiguration: object = {
    baseURL: baseURL,
    params: {
      project_id: projectId,
      project_token: projectToken,
      token: userToken
    },
    ...instanceConfiguration
  }
  
  if (!projectToken || !(projectId && userToken) && csrfToken) {
    const headers: object = { 'X-CSRF-Token': csrfToken }

    Object.assign(axiosConfiguration, { headers })
  }

  return axios.create({ 
    ...axiosConfiguration
  })
}