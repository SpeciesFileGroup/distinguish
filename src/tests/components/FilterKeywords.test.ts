import { setup } from '../utils/initializeApp'
import { fireEvent } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import FilterKeywords from '@/components/Filter/FilterKeywords.vue'


describe('Filter keywords', () => {
  it('disable button if there are no keywords ', async () => {
    const { container } = setup(FilterKeywords)
    const openButton = container.querySelector('button') as HTMLButtonElement

    await userEvent.click(openButton)

    expect(container.querySelector('.modal-body')).toBe(null)
  })

  it('displays a list of keywords and toggle lenguage', async () => {
    const { 
      store,
      filterStore,
      container,
    } = setup(FilterKeywords)
  
    const openButton = container.querySelector('button') as HTMLButtonElement

    await store.requestInteractiveKey({ observationMatrixId: 24 })
    await fireEvent.click(openButton)

    const input = container.querySelector('input[value="127"]') as HTMLInputElement

    await userEvent.click(input)
    expect(filterStore.getKeywordIds).toEqual([127])
    
    await userEvent.click(input)
    expect(filterStore.getKeywordIds).toEqual([])
  })
})
