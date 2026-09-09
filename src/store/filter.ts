import { reactive, computed } from 'vue'
import { IKeyFilter } from '@/interfaces'
import { DescriptorFilter } from '@/types'
import { useStores } from './container'
import type { StoreContainer } from './container'

const createInitialState = (): IKeyFilter => ({
  descriptors: {},
  eliminateUnknown: undefined,
  rowFilter: true,
  errorTolerance: undefined,
  identifiedToRank: undefined,
  keywordIds: [],
  languageId: undefined,
  rowIds: [],
  sorting: undefined
})

export const createFilterStore = (stores: StoreContainer) => {
  const state = reactive<IKeyFilter>(createInitialState())

  const filterParams = computed(() => {
    const descriptorsParam = Object.entries(state.descriptors)
      .map(([key, value]) =>
        Array.isArray(value) ? `${key}:${value.join('|')}` : `${key}:${value}`
      )
      .join('||')

    return {
      selected_descriptors: descriptorsParam,
      language_id: state.languageId,
      keyword_ids: state.keywordIds,
      sorting: state.sorting,
      identified_to_rank: state.identifiedToRank,
      error_tolerance: state.errorTolerance,
      eliminate_unknown: state.eliminateUnknown,
      row_filter: state.rowFilter ? state.rowIds.join('|') : [],
      otu_filter: stores.settings.getOtuId
    }
  })

  const getDescriptorValueById = (id: number): DescriptorFilter => {
    const value = state.descriptors[id]

    return typeof value === 'boolean' ? value : value || ''
  }

  const setDescriptor = ({
    descriptorId,
    value
  }: {
    descriptorId: number
    value: DescriptorFilter
  }): void => {
    state.descriptors[descriptorId] = value
  }

  const removeDescriptor = (descriptorId: number): void => {
    delete state.descriptors[descriptorId]
  }

  const removeKeywordId = (id: number): void => {
    const index: number = state.keywordIds.findIndex(
      (keywordId) => keywordId === id
    )

    if (index > -1) {
      state.keywordIds.splice(index, 1)
    }
  }

  const addKeywordId = (id: number): void => {
    state.keywordIds.push(id)
  }

  const setKeywordIds = (ids: Array<number>): void => {
    state.keywordIds = ids
  }

  const setLanguageId = (id: number): void => {
    state.languageId = id
  }

  const setErrorTolerance = (value: number | undefined): void => {
    state.errorTolerance = value
  }

  const setEliminateUnknown = (value: boolean): void => {
    state.eliminateUnknown = value
  }

  const setIdentifiedToRank = (value: string | undefined): void => {
    state.identifiedToRank = value
  }

  const setSorting = (value: string | undefined): void => {
    state.sorting = value
  }

  const setRowFilter = (value: boolean): void => {
    state.rowFilter = value
  }

  const setRowIds = (ids: Array<number>): void => {
    state.rowIds = ids
  }

  const reset = (): void => {
    Object.assign(state, createInitialState())
  }

  return {
    state,

    get getKeywordIds(): Array<number> {
      return state.keywordIds
    },

    get getLanguageId(): number | undefined {
      return state.languageId
    },

    get getRowIds(): Array<number> {
      return state.rowIds
    },

    get getRowFilter(): boolean {
      return state.rowFilter
    },

    get getDescriptors(): IKeyFilter['descriptors'] {
      return state.descriptors
    },

    get getIdentifiedToRank(): string | undefined {
      return state.identifiedToRank
    },

    get getEliminateUknown(): boolean | undefined {
      return state.eliminateUnknown
    },

    get getErrorTolerance(): number | undefined {
      return state.errorTolerance
    },

    get getSorting(): string | undefined {
      return state.sorting
    },

    get getFilterParams() {
      return filterParams.value
    },

    getDescriptorValueById,
    setDescriptor,
    removeDescriptor,
    removeKeywordId,
    addKeywordId,
    setKeywordIds,
    setLanguageId,
    setErrorTolerance,
    setEliminateUnknown,
    setIdentifiedToRank,
    setSorting,
    setRowFilter,
    setRowIds,
    reset
  }
}

export const useFilterStore = (): StoreContainer['filter'] =>
  useStores().filter
