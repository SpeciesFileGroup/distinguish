import { render, waitFor } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import App from '@/App.vue'

const apiConfig = {
  baseURL: '',
  projectToken: 'test-token'
}

const renderKey = (observationMatrixId: number) =>
  render(App, { props: { observationMatrixId, apiConfig } })

const eliminateUnknownCheckbox = (container: Element) =>
  container.querySelectorAll('input[type="checkbox"]')[1] as HTMLInputElement

describe('Multiple interactive keys on the same page', () => {
  it('keeps the filter state isolated per instance', async () => {
    const first = renderKey(24)
    const second = renderKey(25)

    await waitFor(() => {
      expect(first.container.querySelectorAll('li').length).toBeGreaterThan(0)
      expect(second.container.querySelectorAll('li').length).toBeGreaterThan(0)
    })

    const firstCheckbox = eliminateUnknownCheckbox(first.container)
    const secondCheckbox = eliminateUnknownCheckbox(second.container)

    await userEvent.click(firstCheckbox)

    expect(firstCheckbox.checked).toBe(true)
    expect(secondCheckbox.checked).toBe(false)
  })

  it('resets one key without touching the other', async () => {
    const first = renderKey(24)
    const second = renderKey(25)

    await waitFor(() => {
      expect(first.container.querySelectorAll('li').length).toBeGreaterThan(0)
      expect(second.container.querySelectorAll('li').length).toBeGreaterThan(0)
    })

    await userEvent.click(eliminateUnknownCheckbox(first.container))
    await userEvent.click(eliminateUnknownCheckbox(second.container))

    expect(eliminateUnknownCheckbox(first.container).checked).toBe(true)
    expect(eliminateUnknownCheckbox(second.container).checked).toBe(true)

    const resetButton = [
      ...first.container.querySelectorAll('button')
    ].find((button) => button.textContent?.trim() === 'Reset') as HTMLButtonElement

    await userEvent.click(resetButton)

    expect(eliminateUnknownCheckbox(first.container).checked).toBe(false)
    expect(eliminateUnknownCheckbox(second.container).checked).toBe(true)
  })
})
