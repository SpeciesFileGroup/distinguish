import { defineStore } from "pinia"
import {
  IDescriptor,
  IDescriptorContinuous,
  IDescriptorQualitative,
  IObservationMatrix
} from "../interfaces"
import makeRequest from '../utils/makeRequest'

type Descriptor = IDescriptor | IDescriptorContinuous | IDescriptorQualitative

interface IStore {
  descriptors: Array<Descriptor>
  observationMatrix: IObservationMatrix | undefined
}

export const useStore = defineStore('descriptors', {
  state: (): IStore => ({
    observationMatrix: undefined,
    descriptors: []
  }),

  getters: {
    observationMatrix: state => state.observationMatrix,
    
    descriptors: state => state.descriptors,

    descriptorById: state => (id: number) => state.descriptors
      .find((d: Descriptor) => d.descriptorId === id),
  },

  actions: {
    setDescriptors (descriptors: Array<Descriptor>) {
      this.descriptors = descriptors
    },

    requestObservationMatrix (id: number) {
      makeRequest.get(`/tasks/observation_matrices/interactive_key/${id}/key`, {
        params: { 
          row_filter: {} 
        }
      }).then(response => {
        this.observationMatrix = response.data
      })
    }
  }
})
