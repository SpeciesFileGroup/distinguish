import { inject, provide, InjectionKey } from 'vue'
import type { createSettingsStore } from './settings'
import type { createFilterStore } from './filter'
import type { createObservationMatrixStore } from './observationMatrices'

export type SettingsStore = ReturnType<typeof createSettingsStore>
export type FilterStore = ReturnType<typeof createFilterStore>
export type ObservationMatrixStore = ReturnType<
  typeof createObservationMatrixStore
>

export interface StoreContainer {
  settings: SettingsStore
  filter: FilterStore
  observationMatrix: ObservationMatrixStore
}

export const STORES_KEY: InjectionKey<StoreContainer> =
  Symbol('distinguish-stores')

export const provideStores = (stores: StoreContainer): void => {
  provide(STORES_KEY, stores)
}

export const useStores = (): StoreContainer => {
  const stores = inject(STORES_KEY, null)

  if (!stores) {
    throw new Error(
      'Distinguish stores are not available. Render this component inside the Distinguish app, or provide the stores with provideStores().'
    )
  }

  return stores
}
