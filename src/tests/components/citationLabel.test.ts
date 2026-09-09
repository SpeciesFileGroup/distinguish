import { setup } from '../utils/initializeApp'
import { screen } from '@testing-library/vue'
import TitleMatrixCitation from '@/components/Title/TitleMatrixCitation.vue'


describe('Citation label component', () => {
  it('display citation label with author and year', async () => {
    const { store } = setup(TitleMatrixCitation)

    store.setObservationMatrixCitation({
      cached_author_string: 'Darth vader',
      cached: 'Darth vader, 1234',
      year: 1234
    } as any)

    await screen.findByText('Darth vader, 1234', { exact: true })
  })

  it('display only author', async () => {
    const { store } = setup(TitleMatrixCitation)

    store.setObservationMatrixCitation({
      cached_author_string: 'Darth vader',
      cached: 'Darth vader'
    } as any)

    await screen.findByText('Darth vader', { exact: true })
  })

  it('display only year', async () => {
    const { store } = setup(TitleMatrixCitation)

    store.setObservationMatrixCitation({
      cached: '1987',
      year: 1987
    } as any)

    await screen.findByText('1987', { exact: true })
  })
})
