import { defineStore } from "pinia"
import { IKeyFilter } from "../interfaces"

export type DescriptorFilter = string | boolean | Array<number>

export const useFilterStore = defineStore('filter', {
  state: (): IKeyFilter => ({
    descriptors: [],
    eliminateUknown: undefined,
    errorTolerance: undefined,
    identifiedToRank: undefined,
    keywordIds: [],
    languageId: undefined,
    otuFilter: [],
    sorting: undefined
  }),

  getters: {
    getKeywordIds: state => state.keywordIds,

    getOtuFilter: state => state.otuFilter,

    getDescriptors: state => state.descriptors,

    getIdentifiedToRank: state => state.identifiedToRank,

    getEliminateUknown: state => state.eliminateUknown,

    getSorting: state => state.sorting,

    getDescriptorValueById: (state) => (id: number): DescriptorFilter => state.descriptors[id] || ''
  },

  actions: {
    setDescriptor ({ descriptorId, value }: { descriptorId: number, value: DescriptorFilter }) {
      this.descriptors[descriptorId] = value
    },

    removeKeywordId (id: number) {
      const index: number = this.keywordIds.findIndex(keywordId => keywordId === id)

      if (index > -1) {
        this.keywordIds.splice(index, 1)
      }
    },

    addKeywordId (id: number) {
      this.keywordIds.push(id)
    }
  }
})
