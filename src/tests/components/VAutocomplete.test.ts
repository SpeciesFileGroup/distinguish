import { render, screen, fireEvent } from '@testing-library/vue'
import VAutocomplete from '@/components/UI/VAutocomplete.vue'


describe('Autocomplete component', () => {
  const setup = () => {
    const utils = render(VAutocomplete, {
      props: {
        url: '/observation_matrices/autocomplete',
        queryParam: 'term',
        label: 'label_html'
      }
    })
    const input: HTMLInputElement = utils.container.querySelector('input') as HTMLInputElement

    return {
      utils,
      input
    }
  }

  it('it search and display results', async () => {
    const { input } = setup()

    fireEvent.update(input, 'Interactive')
    await screen.findByText('An Interactive Key to Genera of Erythroneurini')
  })

})