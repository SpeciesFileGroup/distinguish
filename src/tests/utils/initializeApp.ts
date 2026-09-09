import { render, RenderOptions } from '@testing-library/vue'
import { createStores, STORES_KEY } from '@/store'
import type { StoreContainer } from '@/store'

type Options = Omit<RenderOptions<any>, 'global'> & { global?: any }

export const setup = (vueComponent: any, options: Options = {}) => {
  const stores: StoreContainer = createStores()
  const { global: globalOptions = {}, ...renderOptions } = options

  const utils = render(vueComponent, {
    ...renderOptions,
    global: {
      ...globalOptions,
      provide: {
        ...(globalOptions.provide || {}),
        [STORES_KEY as symbol]: stores
      }
    }
  })

  return {
    ...utils,
    stores,
    store: stores.observationMatrix,
    filterStore: stores.filter,
    settingStore: stores.settings
  }
}
