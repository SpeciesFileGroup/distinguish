import { useObservationMatrixStore } from './observationMatrices';
import { IDescriptor } from './../interfaces/Descriptor';
import { setActivePinia, createPinia } from 'pinia'
import { 
  beforeAll, 
  describe, 
  expect, 
  it
} from 'vitest'


const mockBaseDescriptor = {
  depictionIds: [],
  description: 'This is a test description',
  name: 'Test',
  position: 5,
  type: 'Descriptor',
  usefulness: 1,
  weight: 0
}

const mockUsedDescriptor: IDescriptor = {
  ...mockBaseDescriptor,
  descriptorId: 1,
  status: 'used',
}

const mockUselessDescriptor: IDescriptor = {
  ...mockBaseDescriptor,
  descriptorId: 2,
  status: 'useless',
}

const mockUsefulDescriptor: IDescriptor = {
  ...mockBaseDescriptor,
  descriptorId: 3,
  status: 'useful'
}

const mockDescriptorList: Array<IDescriptor> = [
  mockUsedDescriptor,
  mockUselessDescriptor,
  mockUsefulDescriptor
]

describe('Observation Matrices Store', () => {
  let store: ReturnType<typeof useObservationMatrixStore>

  beforeAll(() => {
    setActivePinia(createPinia())

    store = useObservationMatrixStore()
  })

  it ('set descriptors', () => {
    store.setDescriptors(mockDescriptorList)

    expect(store.descriptors).toStrictEqual(mockDescriptorList)
  })

  it ('get descriptor by id', () => {
    const descriptor = store.getDescriptorById(1)

    expect(descriptor).toStrictEqual(mockUsedDescriptor)
  })

  it ('get descriptor by used', () => {
    const descriptors = store.getDescriptorsUsed

    expect(descriptors).toStrictEqual([mockUsedDescriptor])
  })

  it ('get descriptor by unuseful', () => {
    const descriptors = store.getDescriptorsUseless

    expect(descriptors).toStrictEqual([mockUselessDescriptor])
  })

  it ('get all descriptors', () => {
    const descriptors = store.getDescriptors

    expect(descriptors).toStrictEqual([
      mockUsedDescriptor,
      mockUselessDescriptor,
      mockUsefulDescriptor
    ])
  })

  it ('load observation matrices', async () => {
    const matrix = await store.requestObservationMatrix(1)

    console.log(JSON.stringify(store.observationMatrix))
  })
})