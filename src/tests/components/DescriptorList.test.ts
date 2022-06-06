import { setup } from './../utils/initializeApp'
import { fireEvent, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import DescriptorList from '@/components/Panel/PanelDescriptors/DescriptorsList.vue'

describe('Descriptor List', () => {
  it('Render remaining list', async () => {
    const { store, container } = setup(DescriptorList)
  
    await store.requestInteractiveKey({ observationMatrixId: 24 })
  
    expect(container.querySelectorAll('li').length).toBe(7)
    screen.getByText('Aedeagal shaft crossection', { exact: true })
  })

  it('Select a qualitative value', async () => {
    const { store, filterStore, container } = setup(DescriptorList)
    
    await store.requestInteractiveKey({ observationMatrixId: 24 })

    const selectorInput = container.querySelector('#descriptor-67 select') as HTMLSelectElement
  
    await userEvent.selectOptions(selectorInput, ['1168'])
    expect(filterStore.getDescriptorValueById(67)).toEqual(['1168'])
  }) 

  it ('Set descriptor sample', async () => {
    const { store, filterStore, container } = setup(DescriptorList)

    await store.requestInteractiveKey({ observationMatrixId: 24 })

    const inputElement = container.querySelector('#descriptor-108 input') as HTMLInputElement

    fireEvent.update(inputElement, '123')
    fireEvent.blur(inputElement)

    expect(filterStore.getDescriptorValueById(108)).toEqual('123')
  })
})
