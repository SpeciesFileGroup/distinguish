import { setup } from '../utils/initializeApp'
import { screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import FilterLanguage from '@/components/Filter/FilterLanguage.vue'


describe('Filter language', () => {
  const renderComponent = async () => {
    const utils = setup(FilterLanguage)

    await utils.store.requestInteractiveKey({ observationMatrixId: 24 })

    return utils
  }

  it('Renders languages', async () => {
    const { container } = await renderComponent() 

    expect(container.querySelectorAll('option').length).toBe(2)
  })

  it('select language', async () => {
    const { filterStore } = await renderComponent() 

    await userEvent.selectOptions(screen.getByRole('listbox'), ['124'])

    expect(filterStore.getLanguageId).toBe(124)
  })
})
