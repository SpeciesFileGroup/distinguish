import { reactive, computed } from 'vue'
import { IAPIConfiguration } from '@/interfaces'
import { useStores } from './container'
import type { StoreContainer } from './container'

interface ISettings {
  gridLayout: string
  isLoading: boolean
  isRefreshing: boolean
  refreshOnlyTaxa: boolean
  shouldUpdate: boolean
  observationMatrixId?: number
  otuId?: number[]
  errorMessage: string
  apiConfig: IAPIConfiguration
}

const createInitialState = (): ISettings => ({
  gridLayout: 'distinguish-layout-mode-1',
  isLoading: false,
  isRefreshing: false,
  refreshOnlyTaxa: false,
  shouldUpdate: true,
  observationMatrixId: undefined,
  otuId: [],
  errorMessage: '',
  apiConfig: {
    baseURL: '',
    projectId: undefined,
    projectToken: undefined,
    userToken: undefined
  }
})

export const createSettingsStore = (stores: StoreContainer) => {
  const state = reactive<ISettings>(createInitialState())

  const otuIdParam = computed<string>(() => state.otuId?.join('|') || '')

  const setObservationMatrixId = (value: number): void => {
    state.observationMatrixId = value
  }

  const setShouldUpdate = (value: boolean): void => {
    state.shouldUpdate = value
  }

  const setRefreshOnlyTaxa = (value: boolean): void => {
    state.refreshOnlyTaxa = value
  }

  const setAPIConfig = (config: IAPIConfiguration): void => {
    state.apiConfig = config
  }

  const setOtuId = (otuId: number | number[]): void => {
    state.otuId = [otuId].flat()
  }

  const setGridLayout = (value: string): void => {
    state.gridLayout = value
  }

  const setErrorMessage = (value: string): void => {
    state.errorMessage = value
  }

  const checkUpdate = (): void => {
    const observationMatrixId = state.observationMatrixId

    if (state.shouldUpdate && typeof observationMatrixId === 'number') {
      state.isLoading = true
      stores.observationMatrix
        .requestInteractiveKey({
          observationMatrixId: observationMatrixId,
          params: stores.filter.getFilterParams,
          opt: {
            refreshOnlyTaxa: state.refreshOnlyTaxa
          }
        })
        .then((_) => (state.errorMessage = ''))
        .catch((error) => (state.errorMessage = error.message))
        .finally(() => (state.isLoading = false))
    }
  }

  const reset = (): void => {
    Object.assign(state, createInitialState())
  }

  return {
    state,

    get getErrorMessage(): string {
      return state.errorMessage
    },

    get getIsLoading(): boolean {
      return state.isLoading
    },

    get getLayout(): string {
      return state.gridLayout
    },

    get getRefreshOnlyTaxa(): boolean {
      return state.refreshOnlyTaxa
    },

    get getShouldUpdate(): boolean {
      return state.shouldUpdate
    },

    get getObservationMatrixId(): number | undefined {
      return state.observationMatrixId
    },

    get getOtuId(): string {
      return otuIdParam.value
    },

    get getAPIConfig(): IAPIConfiguration {
      return state.apiConfig
    },

    setObservationMatrixId,
    setShouldUpdate,
    setRefreshOnlyTaxa,
    setAPIConfig,
    setOtuId,
    setGridLayout,
    setErrorMessage,
    checkUpdate,
    reset
  }
}

export const useSettingsStore = (): StoreContainer['settings'] =>
  useStores().settings
