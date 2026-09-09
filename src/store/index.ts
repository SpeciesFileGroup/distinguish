import { createSettingsStore } from './settings'
import { createFilterStore } from './filter'
import { createObservationMatrixStore } from './observationMatrices'
import type { StoreContainer } from './container'

export const createStores = (): StoreContainer => {
  const stores = {} as StoreContainer

  stores.settings = createSettingsStore(stores)
  stores.filter = createFilterStore(stores)
  stores.observationMatrix = createObservationMatrixStore(stores)

  return stores
}

export { provideStores, useStores, STORES_KEY } from './container'
export { useSettingsStore } from './settings'
export { useFilterStore } from './filter'
export { useObservationMatrixStore } from './observationMatrices'
export type {
  StoreContainer,
  SettingsStore,
  FilterStore,
  ObservationMatrixStore
} from './container'
