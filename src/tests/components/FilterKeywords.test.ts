import { createTestingPinia } from '@pinia/testing'
import { render, fireEvent } from '@testing-library/vue'
import { useFilterStore } from '@/store/filter';
import { useObservationMatrixStore } from '@/store/observationMatrices'
import userEvent from '@testing-library/user-event'
import FilterKeywords from '@/components/Filter/FilterKeywords.vue'


describe('Filter keywords', () => {
  const setup = () => {
    const utils = render(FilterKeywords, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })]
      }
    })

    const store: ReturnType<typeof useObservationMatrixStore> = useObservationMatrixStore()
    const filterStore: ReturnType<typeof useFilterStore> = useFilterStore()
    
    return {
      ...utils,
      store,
      filterStore
    }
  }

  it('It opens modal', async () => {
    const { container } = setup() 
    const openButton = container.querySelector('button') as HTMLButtonElement

    await userEvent.click(openButton)

    expect(container.querySelector('.modal-body')).not.toBe(null)
  })

  it('It displays a list of keywords', async () => {
    const { 
      store,
      filterStore,
      container,
    } = setup()
  
    const openButton = container.querySelector('button') as HTMLButtonElement

    await store.requestInteractiveKey(24)
    
    await fireEvent.click(openButton)

    const input = container.querySelector('input[value="127"]') as HTMLInputElement

    await userEvent.click(input)

    expect(filterStore.getKeywordIds).toEqual([127])
  })
})