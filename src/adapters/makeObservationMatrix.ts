import { IObservationMatrix } from "../interfaces"

export const makeObservationMatrix = (data: any): IObservationMatrix => ({
  observationMatrixId: data.observation_matrix_id,
  name: data.name,
  globalId: data.global_id
})
