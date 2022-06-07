import { createTestingPinia } from '@pinia/testing'
import { useObservationMatrixStore } from '@/store/observationMatrices'
import { useFilterStore } from '@/store/filter'
import { render } from '@testing-library/vue'

export const setup = (vueComponent: unknown, options: object = {}) => {
  const utils = render(vueComponent, {
    global: {
      plugins: [createTestingPinia({ stubActions: false })]
    },
    ...options
  })

  const store: ReturnType<typeof useObservationMatrixStore> = useObservationMatrixStore()
  const filterStore: ReturnType<typeof useFilterStore> = useFilterStore()

  return {
    ...utils,
    store,
    filterStore
  }
}