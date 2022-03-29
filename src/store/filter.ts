import { defineStore } from "pinia"
import { IKeyFilter } from "../interfaces"

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
    getFilter: state => state,

    getDescriptors: state => state.descriptors,

    getDescriptorValueById: (state) => (id: number): any => state.descriptors[id]
  },

  actions: {
    setDescriptor ({ descriptorId, value }: { descriptorId: number, value: string | boolean | Array<number> }) {
      this.descriptors[descriptorId] = value
    }
  }
})
