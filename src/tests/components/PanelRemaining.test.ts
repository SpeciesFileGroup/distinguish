import { useObservationMatrixStore } from '@/store/observationMatrices';
import { createTestingPinia } from '@pinia/testing';
import { render, screen } from '@testing-library/vue';
import PanelRemaining from '@/components/Panel/PanelRemaining.vue'


describe('Panel remaining', () => {
  const setup = () => {
    const utils = render(PanelRemaining, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })]
      }
    })

    const store: ReturnType<typeof useObservationMatrixStore> = useObservationMatrixStore()

    return {
      ...utils,
      store
    }
  }

  it('Render remaining list', async () => {
    const { store, container } = setup()

    await store.requestInteractiveKey({ observationMatrixId: 24 })
    expect(container.querySelectorAll('li').length).toBe(5)
  })
})
