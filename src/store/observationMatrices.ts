import { makeObservationMatrix } from './../adapters/makeObservationMatrix';
import { defineStore } from "pinia"
import { IObservationMatrix } from "../interfaces"
import { Descriptor } from '../types'
import makeRequest from '../utils/makeRequest'

interface IStore {
  descriptors: Array<Descriptor>
  observationMatrix: IObservationMatrix | undefined
}

export const useObservationMatrixStore = defineStore('observationMatrix', {
  state: (): IStore => ({
    observationMatrix: undefined,
    descriptors: []
  }),

  getters: {
    getObservationMatrix: (state: IStore) => state.observationMatrix,
    
    getDescriptors: (state: IStore): Array<Descriptor> => state.descriptors,

    getDescriptorById: (state: IStore) => (id: number): Descriptor | undefined => state.descriptors.find((d: Descriptor) => d.descriptorId === id),

    getDescriptorsUsed: (state: IStore): Array<Descriptor> => state.descriptors.filter(d => d.status === 'used'),

    getDescriptorsUseless: (state: IStore): Array<Descriptor> => state.descriptors.filter(d => d.status === 'useless'),

    getDescriptorsUseful: (state: IStore): Array<Descriptor> => state.descriptors.filter(d => d.status === 'useful')
  },

  actions: {
    setDescriptors (descriptors: Array<Descriptor>) {
      this.descriptors = descriptors
    },

    async requestObservationMatrix (id: number) {
      return makeRequest.get(`/tasks/observation_matrices/interactive_key/${id}/key`, {
        params: { 
          row_filter: {} 
        }
      }).then(response => {
        this.observationMatrix = makeObservationMatrix(response.data)
      })
    }
  }
})
