import { defineStore } from "pinia"
import { Descriptor } from '../types'
import {
  makeDescriptor,
  makeObservationMatrix,
  makeRow
} from '../adapters';
import {
  IObservationMatrix,
  ICitation,
  IRow
} from "../interfaces"

import makeRequest from '../utils/makeRequest'

interface IStore {
  descriptors: Array<Descriptor>
  observationMatrix: IObservationMatrix | undefined,
  citation: ICitation | undefined
  eliminated: Array<IRow>,
  remaining: Array<IRow>
}

export const useObservationMatrixStore = defineStore('observationMatrix', {
  state: (): IStore => ({
    observationMatrix: undefined,
    citation: undefined,
    descriptors: [],
    eliminated: [],
    remaining: []
  }),

  getters: {
    getCitation: (state: IStore): ICitation | undefined => state.citation,

    getObservationMatrix: (state: IStore) => state.observationMatrix,

    getDescriptors: (state: IStore): Array<Descriptor> => state.descriptors,

    getDescriptorById: (state: IStore) => (id: number): Descriptor | undefined => state.descriptors.find((d: Descriptor) => d.descriptorId === id),

    getDescriptorsUsed: (state: IStore): Array<Descriptor> => state.descriptors.filter(d => d.status === 'used'),

    getDescriptorsUseless: (state: IStore): Array<Descriptor> => state.descriptors.filter(d => d.status === 'useless'),

    getDescriptorsUseful: (state: IStore): Array<Descriptor> => state.descriptors.filter(d => d.status === 'useful'),

    getEliminated: (state: IStore): Array<IRow> => state.eliminated,

    getRemaining: (state: IStore): Array<IRow> => state.remaining
  },

  actions: {
    setDescriptors(descriptors: Array<Descriptor>) {
      this.descriptors = descriptors
    },

    setEliminated(rows: Array<IRow>) {
      this.eliminated = rows
    },

    setRemaining(rows: Array<IRow>) {
      this.remaining = rows
    },

    setObservationMatrix(observationMatrix: IObservationMatrix) {
      this.observationMatrix = observationMatrix
    },

    async requestObservationMatrix(id: number) {
      return makeRequest.get(`/tasks/observation_matrices/interactive_key/${id}/key`, {
        params: {
          row_filter: {}
        }
      }).then(response => {
        this.setObservationMatrix(makeObservationMatrix(response.data))
        this.setDescriptors(response.data.list_of_descriptors.map((d: any) => makeDescriptor(d)))
        this.setEliminated(response.data.eliminated.map((r: object) => makeRow(r)))
        this.setRemaining(response.data.remaining.map((r: object) => makeRow(r)))
      })
    }
  }
})
