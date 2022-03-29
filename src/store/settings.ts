import { defineStore } from "pinia"

interface ISettings {
  gridLayout: string,
  isLoading: boolean,
  isRefreshing: boolean,
  refreshOnlyTaxa: boolean,
  rowFilter: boolean
}

export const useSettingsStore = defineStore('settings', {
  state: (): ISettings => ({
    gridLayout: 'layout-mode-1',
    isLoading: false,
    isRefreshing: false,
    refreshOnlyTaxa: false,
    rowFilter: true
  }),

  getters: {
    state: state => state
  },
})
