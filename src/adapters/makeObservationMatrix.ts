import { IObservationMatrix } from "../interfaces"

export const makeObservationMatrix = (data: any): IObservationMatrix => ({
  observationMatrixId: data.observation_matrix_id,
  name: data.observation_matrix.name,
  globalId: data.observation_matrix.global_id
})
