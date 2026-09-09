import { IAPIConfiguration } from '@/interfaces'
import { useRequest } from '@/composables/useRequest'

export class Depiction {
  static find(id: number, apiConfig: IAPIConfiguration) {
    return useRequest(apiConfig).get(`/depictions/${id}.json`, {
      params: { extend: ['image'] }
    })
  }
}
