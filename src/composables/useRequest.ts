import { IAPIConfiguration } from '@/interfaces'
import axios from 'axios'

export const useRequest = (
  apiConfig: IAPIConfiguration,
  instanceConfiguration: object = {}
) => {
  const { baseURL, projectId, projectToken, userToken, csrfToken } = apiConfig

  const axiosConfiguration: object = {
    baseURL: baseURL,
    params: {
      project_id: projectId,
      project_token: projectToken,
      token: userToken
    },
    ...instanceConfiguration
  }

  if (!projectToken || (!(projectId && userToken) && csrfToken)) {
    const headers: object = { 'X-CSRF-Token': csrfToken }

    Object.assign(axiosConfiguration, { headers })
  }

  return axios.create({
    ...axiosConfiguration
  })
}
