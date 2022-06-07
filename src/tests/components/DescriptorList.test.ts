import { setup } from './../utils/initializeApp'
import { fireEvent, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import DescriptorList from '@/components/Panel/PanelDescriptors/DescriptorsList.vue'

interface ITestApp {
  app: ReturnType<typeof setup>
}

describe('Descriptor List', () => {
  const title = 'This is the test title'
  let app: ReturnType<typeof setup>

  beforeEach(async () => {
    app = setup(DescriptorList, { 
      props: { 
        title,
        descriptors: []
      }
    })

    await app.store.requestInteractiveKey({ observationMatrixId: 24 })
    await app.rerender({ 
      descriptors: app.store.getDescriptorsUseful,
      title
    })
  })

  it('renders title', () => {
    const { getByText } = app

    getByText(title)
  })

  it('render remaining list', async () => {
    const { container,  } = app
  
    expect(container.querySelectorAll('li').length).toBe(7)
    screen.getByText('Aedeagal shaft crossection', { exact: true })
  })

  it('select a qualitative value', async () => {
    const { filterStore, container } = app
    const selectorInput = container.querySelector('#descriptor-67 select') as HTMLSelectElement
  
    await userEvent.selectOptions(selectorInput, ['1168'])
    expect(filterStore.getDescriptorValueById(67)).toEqual([1168])
  }) 

  it ('set descriptor sample', async () => {
    const { filterStore, container } = app
    const inputElement = container.querySelector('#descriptor-108 input') as HTMLInputElement

    fireEvent.update(inputElement, '123')
    fireEvent.blur(inputElement)

    expect(filterStore.getDescriptorValueById(108)).toEqual('123')
  })
})
