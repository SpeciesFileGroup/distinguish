import { defineStore } from "pinia"
import { IKeyFilter } from "@/interfaces"

export type DescriptorFilter = string | boolean | Array<number>

export const useFilterStore = defineStore('filter', {
  state: (): IKeyFilter => ({
    descriptors: {},
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

    getLanguageId: state => state.languageId,

    getOtuFilter: state => state.otuFilter,

    getDescriptors: state => state.descriptors,

    getIdentifiedToRank: state => state.identifiedToRank,

    getEliminateUknown: state => state.eliminateUknown,

    getErrorTolerance: state => state.errorTolerance,

    getSorting: state => state.sorting,

    getDescriptorValueById: (state) => (id: number): DescriptorFilter => state.descriptors[id] || '',

    getFilterParams: state => {
      const descriptorsParam = Object
        .entries(state.descriptors)
        .map(([key, value]) => 
          Array.isArray(value)
            ? `${key}:${value.join('|')}`
            : `${key}:${value}`
        )
        .join('||')

      return {
        selected_descriptors: descriptorsParam,
        language_id: state.languageId,
        keyword_ids: state.keywordIds,
        sorting: state.sorting,
        identified_to_rank: state.identifiedToRank,
        error_tolerance: state.errorTolerance
      }
    }
  },

  actions: {
    setDescriptor ({ descriptorId, value }: { descriptorId: number, value: DescriptorFilter }) {
      this.descriptors[descriptorId] = value
    },

    removeDescriptor (descriptorId: number) {
      delete this.descriptors[descriptorId]
    },

    removeKeywordId (id: number) {
      const index: number = this.keywordIds.findIndex(keywordId => keywordId === id)

      if (index > -1) {
        this.keywordIds.splice(index, 1)
      }
    },

    addKeywordId (id: number) {
      this.keywordIds.push(id)
    },

    setLanguageId (id: number) {
      this.languageId = id
    },

    setErrorTolerance (value: number | undefined) {
      this.errorTolerance = value
    }
  }
})
