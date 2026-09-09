import { reactive, computed } from 'vue'
import { ObservationMatrix } from '@/services/ObservationMatrix'
import { StatusType } from '@/constants/StatusType'
import { Descriptor } from '@/types'
import { useStores } from './container'
import type { StoreContainer } from './container'
import {
  makeDescriptor,
  makeObservationMatrix,
  makeRow,
  makeKeyword,
  makeLanguage,
  makeCitation
} from '@/adapters'
import {
  IObservationMatrix,
  ICitation,
  IRow,
  IKeyword,
  ILanguage
} from '@/interfaces'

interface IStore {
  descriptors: Array<Descriptor>
  observationMatrix: IObservationMatrix | undefined
  citation: ICitation | undefined
  eliminated: Array<IRow>
  remaining: Array<IRow>
  availableKeywords: Array<IKeyword>
  availableLanguages: Array<ILanguage>
}

const createInitialState = (): IStore => ({
  observationMatrix: undefined,
  citation: undefined,
  descriptors: [],
  eliminated: [],
  remaining: [],
  availableKeywords: [],
  availableLanguages: []
})

export const createObservationMatrixStore = (stores: StoreContainer) => {
  const state = reactive<IStore>(createInitialState())

  const descriptorsUsed = computed<Array<Descriptor>>(() =>
    state.descriptors.filter((d: Descriptor) => d.status === StatusType.Used)
  )

  const descriptorsUseless = computed<Array<Descriptor>>(() =>
    state.descriptors.filter((d: Descriptor) => d.status === StatusType.Useless)
  )

  const descriptorsUseful = computed<Array<Descriptor>>(() =>
    state.descriptors.filter((d: Descriptor) => d.status === StatusType.Useful)
  )

  const getDescriptorById = (id: number): Descriptor | undefined =>
    state.descriptors.find((d: Descriptor) => d.descriptorId === id)

  const setDescriptors = (descriptors: Array<Descriptor>): void => {
    state.descriptors = descriptors
  }

  const setEliminated = (rows: Array<IRow>): void => {
    state.eliminated = rows
  }

  const setRemaining = (rows: Array<IRow>): void => {
    state.remaining = rows
  }

  const setLanguages = (languages: Array<ILanguage>): void => {
    state.availableLanguages = languages
  }

  const setKeywords = (keywords: Array<IKeyword>): void => {
    state.availableKeywords = keywords
  }

  const setObservationMatrix = (observationMatrix: IObservationMatrix): void => {
    state.observationMatrix = observationMatrix
  }

  const setObservationMatrixCitation = (citation: ICitation): void => {
    state.citation = makeCitation(citation)
  }

  const requestInteractiveKey = async ({
    observationMatrixId,
    params = {},
    opt = {}
  }: {
    observationMatrixId: number
    params?: object
    opt?: { refreshOnlyTaxa?: boolean }
  }) => {
    const request = await ObservationMatrix.key(
      observationMatrixId,
      { params },
      stores.settings.getAPIConfig
    )
    const { data } = request

    if (!opt.refreshOnlyTaxa) {
      setObservationMatrix(makeObservationMatrix(data))
      setObservationMatrixCitation(data.observation_matrix_citation)
      setDescriptors(
        data.list_of_descriptors.map((d: object) => makeDescriptor(d))
      )
      setKeywords(
        data.descriptor_available_keywords.map(
          (r: object): IKeyword => makeKeyword(r)
        )
      )
      setLanguages(
        data.descriptor_available_languages.map(
          (r: object): ILanguage => makeLanguage(r)
        )
      )
    }

    setEliminated(data.eliminated.map((r: object) => makeRow(r)))
    setRemaining(data.remaining.map((r: object) => makeRow(r)))

    return request
  }

  const reset = (): void => {
    Object.assign(state, createInitialState())
  }

  return {
    state,

    get getCitation(): ICitation | undefined {
      return state.citation
    },

    get getObservationMatrix(): IObservationMatrix | undefined {
      return state.observationMatrix
    },

    get getDescriptors(): Array<Descriptor> {
      return state.descriptors
    },

    get getDescriptorsUsed(): Array<Descriptor> {
      return descriptorsUsed.value
    },

    get getDescriptorsUseless(): Array<Descriptor> {
      return descriptorsUseless.value
    },

    get getDescriptorsUseful(): Array<Descriptor> {
      return descriptorsUseful.value
    },

    get getEliminated(): Array<IRow> {
      return state.eliminated
    },

    get getKeywords(): Array<IKeyword> {
      return state.availableKeywords
    },

    get getLanguages(): Array<ILanguage> {
      return state.availableLanguages
    },

    get getRemaining(): Array<IRow> {
      return state.remaining
    },

    getDescriptorById,
    setDescriptors,
    setEliminated,
    setRemaining,
    setLanguages,
    setKeywords,
    setObservationMatrix,
    setObservationMatrixCitation,
    requestInteractiveKey,
    reset
  }
}

export const useObservationMatrixStore = (): StoreContainer['observationMatrix'] =>
  useStores().observationMatrix
