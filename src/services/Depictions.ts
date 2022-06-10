import { useRequest } from "@/composables/useRequest"

export class Depiction {
  static find (id: number) {
    return useRequest().get(`/depictions/${id}.json`, { params: { extend: ['image'] }})
  }
}
