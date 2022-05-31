import { useFilterStore, DescriptorFilter } from '@/store/filter';
import { setActivePinia, createPinia } from 'pinia'
import { 
  afterEach,
  beforeAll, 
  beforeEach, 
  describe, 
  expect, 
  it
} from 'vitest'

beforeAll(() => {
  setActivePinia(createPinia())
})

describe('Filter Store', () => {
  let store: ReturnType<typeof useFilterStore>

  beforeEach(() => { store = useFilterStore() })

  afterEach(() => { store.$reset() })

  it ('creates store', () => {
    expect(store).toBeDefined()
  })

  it ('get keyword filter', () => {
    const filter = store.getKeywordIds

    expect(filter).toStrictEqual(store.keywordIds)
  })

  it ('add keyword id', () => {
    store.addKeywordId(123)

    expect(store.getKeywordIds).toStrictEqual([123])
  })

  it ('remove keyword id', () => {
    store.addKeywordId(123)
    store.removeKeywordId(123)

    expect(store.getKeywordIds).toStrictEqual([])
  })

  it ('get otu filter', () => {
    const filter = store.getOtuFilter

    expect(filter).toStrictEqual(store.otuFilter)
  })

  it ('set and get descriptors', () => {
    let descriptorValue: DescriptorFilter

    store.setDescriptor({ descriptorId: 1, value: true })
    store.setDescriptor({ descriptorId: 2, value: '1234' })
    store.setDescriptor({ descriptorId: 3, value: [123, 456] })

    descriptorValue = store.getDescriptorValueById(1)
    expect(descriptorValue).toBe(true)

    descriptorValue = store.getDescriptorValueById(2)
    expect(descriptorValue).toBe('1234')

    descriptorValue = store.getDescriptorValueById(3)
    expect(descriptorValue).toStrictEqual([123, 456])

  })

})