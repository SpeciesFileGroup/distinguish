import makeRequest from "../utils/makeRequest"

export class Depiction {
  static find (id: number) {
    return makeRequest.get(`/depictions/${id}.json`, { params: { extend: ['image'] }})
  }
}
