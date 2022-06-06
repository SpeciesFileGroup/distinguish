import { createTestingPinia } from '@pinia/testing'
import { render, screen, fireEvent } from '@testing-library/vue'
import { useFilterStore } from '@/store/filter';
import { useObservationMatrixStore } from '@/store/observationMatrices'
import userEvent from '@testing-library/user-event'
import FilterLanguage from '@/components/Filter/FilterLanguage.vue'


describe('Filter language', () => {
  const setup = async () => {
    const utils = render(FilterLanguage, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })]
      }
    })

    const store: ReturnType<typeof useObservationMatrixStore> = useObservationMatrixStore()
    const filterStore: ReturnType<typeof useFilterStore> = useFilterStore()

    await store.requestInteractiveKey({ observationMatrixId: 24 })
    
    return {
      ...utils,
      store,
      filterStore
    }
  }

  it('Renders languages', async () => {
    const { container } = await setup() 

    expect(container.querySelectorAll('option').length).toBe(2)
  })

  it('select language', async () => {
    const { filterStore } = await setup() 

    await userEvent.selectOptions(screen.getByRole('listbox'), ['124'])

    filterStore.getLanguageId

    expect(filterStore.getLanguageId).toBe(124)
  })
})