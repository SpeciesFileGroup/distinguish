import { render, screen } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'
import { useObservationMatrixStore } from '@/store/observationMatrices'
import CitationLabel from '@/components/CitationLabel.vue'


describe('Citation label component', () => {
  let store: ReturnType<typeof useObservationMatrixStore>

  beforeEach(() => {
    render(CitationLabel, {
      global: {
        plugins: [createTestingPinia()]
      }
    })

    store = useObservationMatrixStore()
  })

  it('display citation label with author and year', async () => {
    await store.$patch({
      citation: {
        author: 'Darth vader',
        year: 1234
      }
    })

    screen.getByText('Darth vader, 1234', { exact: true })
  })

  it('display only author', async () => {
    await store.$patch({
      citation: {
        author: 'Darth vader',
        year: undefined
      }
    })

    screen.getByText('Darth vader', { exact: true })
  })

  it('display only year', async () => {
    await store.$patch({ 
      citation: {
        author: '',
        year: 1987
      }
    })
    
    screen.getByText('1987', { exact: true })
  })
})