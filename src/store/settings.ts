import { useObservationMatrixStore } from './observationMatrices';
import { useFilterStore } from '@/store/filter';
import { defineStore } from "pinia"


interface ISettings {
  gridLayout: string,
  isLoading: boolean,
  isRefreshing: boolean,
  refreshOnlyTaxa: boolean,
  rowFilter: boolean,
  shouldUpdate: boolean,
  hasChanges: boolean
}

export const useSettingsStore = defineStore('settings', {
  state: (): ISettings => ({
    gridLayout: 'layout-mode-1',
    isLoading: false,
    isRefreshing: false,
    refreshOnlyTaxa: false,
    rowFilter: true,
    shouldUpdate: true,
    hasChanges: false
  }),

  getters: {
    getIsLoading: (state): boolean => state.isLoading,
    
    getLayout: (state): string => state.gridLayout,

    getRefreshOnlyTaxa: (state): boolean => state.refreshOnlyTaxa,

    getRowFilter: (state): boolean => state.rowFilter,

    getShouldUpdate: (state): boolean => state.shouldUpdate,

    getHasChanges: (state): boolean => state.hasChanges
  },

  actions: {
    setHasChanges (value: boolean) {
      this.hasChanges = value
    },

    setShouldUpdate (value: boolean) {
      this.shouldUpdate = value
    },

    checkUpdate () {
      const filterStore = useFilterStore()
      const observationStore = useObservationMatrixStore()
      const observationMatrixId = observationStore.getObservationMatrix?.observationMatrixId

      if (
        //this.hasChanges &&  /// Verificar la actualización del estado
        this.shouldUpdate &&
        observationMatrixId
      ) {
        observationStore.requestInteractiveKey({ 
          observationMatrixId: observationMatrixId,
          params: filterStore.getFilterParams
        })
      }
    }
  }
})
