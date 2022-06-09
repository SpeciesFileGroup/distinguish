import makeRequest from "../utils/makeRequest"

export class ObservationMatrix {
  static key (id: number, params: object) {
    return makeRequest.get(`/depictions/${id}/key`, { params })
  }
}
