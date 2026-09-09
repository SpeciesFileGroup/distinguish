import { IAPIConfiguration } from '@/interfaces'
import { useRequest } from '@/composables/useRequest'

export class ObservationMatrix {
  static key(id: number, params: object, apiConfig: IAPIConfiguration) {
    return useRequest(apiConfig).get(`/observation_matrices/${id}/key`, params)
  }
}
