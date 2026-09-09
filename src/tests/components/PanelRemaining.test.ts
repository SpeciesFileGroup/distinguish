import { setup } from '../utils/initializeApp'
import PanelRemaining from '@/components/Panel/PanelRemaining.vue'


describe('Panel remaining', () => {
  it('Render remaining list', async () => {
    const { store, container } = setup(PanelRemaining)

    await store.requestInteractiveKey({ observationMatrixId: 24 })
    expect(container.querySelectorAll('li').length).toBe(5)
  })
})
