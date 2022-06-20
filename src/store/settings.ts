import { IAPIConfiguration } from '@/interfaces/IAPIConfiguration'
import { useObservationMatrixStore } from './observationMatrices'
import { useFilterStore } from '@/store/filter'
import { defineStore } from "pinia"

interface ISettings {
  gridLayout: string,
  isLoading: boolean,
  isRefreshing: boolean,
  refreshOnlyTaxa: boolean,
  rowFilter: boolean,
  shouldUpdate: boolean,
  observationMatrixId?: number,
  errorMessage: string,
  apiConfig: IAPIConfiguration
}

export const useSettingsStore = defineStore('settings', {
  state: (): ISettings => ({
    gridLayout: 'layout-mode-1',
    isLoading: false,
    isRefreshing: false,
    refreshOnlyTaxa: false,
    rowFilter: true,
    shouldUpdate: true,
    observationMatrixId: undefined,
    errorMessage: '',
    apiConfig: {
      baseURL: '',
      projectId: undefined,
      projectToken: undefined,
      userToken: undefined
    }
  }),

  getters: {
    getErrorMessage: (state): string => state.errorMessage,

    getIsLoading: (state): boolean => state.isLoading,
    
    getLayout: (state): string => state.gridLayout,

    getRefreshOnlyTaxa: (state): boolean => state.refreshOnlyTaxa,

    getRowFilter: (state): boolean => state.rowFilter,

    getShouldUpdate: (state): boolean => state.shouldUpdate,

    getObservationMatrixId: (state): number | undefined => state.observationMatrixId,

    getAPIConfig: (state): IAPIConfiguration => state.apiConfig
  },

  actions: {
    setObservationMatrixId (value: number) {
      this.observationMatrixId = value
    },

    setShouldUpdate (value: boolean) {
      this.shouldUpdate = value
    },

    setRefreshOnlyTaxa (value: boolean) {
      this.refreshOnlyTaxa = value
    },

    setAPIConfig (config: IAPIConfiguration) {
      this.apiConfig = config
    },

    checkUpdate () {
      const filterStore = useFilterStore()
      const observationStore = useObservationMatrixStore()
      const observationMatrixId = this.observationMatrixId

      if (
        this.shouldUpdate &&
        observationMatrixId
      ) {
        this.isLoading = true
        observationStore.requestInteractiveKey({ 
          observationMatrixId: observationMatrixId,
          params: filterStore.getFilterParams,
          opt: { 
            refreshOnlyTaxa: this.refreshOnlyTaxa
          }
        })
        .then(_ => this.errorMessage = '' )
        .catch(error => this.errorMessage = error.message)
        .finally(() => this.isLoading = false)
      }
    }
  }
})
