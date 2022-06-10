import { useRequest } from "@/composables/useRequest"

export class ObservationMatrix {
  static key (id: number, params: object) {
    return useRequest().get(`/observation_matrices/${id}/key`, params)
  }
}
