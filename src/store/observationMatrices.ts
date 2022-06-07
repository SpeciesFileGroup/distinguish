import { defineStore } from "pinia"
import { Descriptor } from '../types'
import {
  makeDescriptor,
  makeObservationMatrix,
  makeRow,
  makeKeyword,
  makeLanguage
} from '@/adapters';
import {
  IObservationMatrix,
  ICitation,
  IRow,
  IKeyword,
  ILanguage
} from "@/interfaces"

import makeRequest from '../utils/makeRequest'

interface IStore {
  descriptors: Array<Descriptor>
  observationMatrix: IObservationMatrix | undefined,
  citation: ICitation | undefined
  eliminated: Array<IRow>,
  remaining: Array<IRow>,
  availableKeywords: Array<IKeyword>,
  availableLanguages: Array<ILanguage>,
}

export const useObservationMatrixStore = defineStore('observationMatrix', {
  state: (): IStore => ({
    observationMatrix: undefined,
    citation: undefined,
    descriptors: [],
    eliminated: [],
    remaining: [],
    availableKeywords: [],
    availableLanguages: []
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

    getKeywords: (state: IStore): Array<IKeyword> => state.availableKeywords,

    getLanguages: (state: IStore): Array<ILanguage> => state.availableLanguages,

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

    setLanguages(languages: Array<ILanguage>) {
      this.availableLanguages = languages
    },

    setKeywords(keywords: Array<IKeyword>) {
      this.availableKeywords = keywords
    },

    setObservationMatrix(observationMatrix: IObservationMatrix) {
      this.observationMatrix = observationMatrix
    },

    async requestInteractiveKey({ observationMatrixId, params = {} }: { observationMatrixId: number, params?: object }) {
      const request = await makeRequest.get(`/observation_matrices/${observationMatrixId}/key`, { params })

      const { data } = request

      this.setObservationMatrix(makeObservationMatrix(data))
      this.setDescriptors(data.list_of_descriptors.map((d: object) => makeDescriptor(d)))
      this.setEliminated(data.eliminated.map((r: object) => makeRow(r)))
      this.setRemaining(data.remaining.map((r: object) => makeRow(r)))
      this.setKeywords(data.descriptor_available_keywords.map((r: object): IKeyword => makeKeyword(r)))
      this.setLanguages(data.descriptor_available_languages.map((r: object): ILanguage => makeLanguage(r)))

      return request
    }
  }
})
