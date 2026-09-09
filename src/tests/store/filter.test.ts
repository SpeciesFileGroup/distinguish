import { createStores } from '@/store'
import { DescriptorFilter } from '@/types'
import type { FilterStore } from '@/store'
import { 
  afterEach,
  beforeEach, 
  describe, 
  expect, 
  it
} from 'vitest'

describe('Filter Store', () => {
  let store: FilterStore

  beforeEach(() => { store = createStores().filter })

  afterEach(() => { store.reset() })

  it ('creates store', () => {
    expect(store).toBeDefined()
  })

  it ('get keyword filter', () => {
    const filter = store.getKeywordIds

    expect(filter).toStrictEqual(store.state.keywordIds)
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
    const filter = store.getRowIds

    expect(filter).toStrictEqual(store.getRowIds)
  })

  it ('set and get descriptors by id', () => {
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

    descriptorValue = store.getDescriptorValueById(999)
    expect(descriptorValue).toStrictEqual('')
  })

  it ('resets to the initial state', () => {
    store.addKeywordId(123)
    store.setLanguageId(4)
    store.setDescriptor({ descriptorId: 1, value: true })

    store.reset()

    expect(store.getKeywordIds).toStrictEqual([])
    expect(store.getLanguageId).toBeUndefined()
    expect(store.getDescriptors).toStrictEqual({})
  })

  it ('builds the filter params with the otu filter from settings', () => {
    const stores = createStores()

    stores.settings.setOtuId([1, 2])
    stores.filter.setDescriptor({ descriptorId: 67, value: [1168, 1169] })
    stores.filter.setKeywordIds([127])
    stores.filter.setRowIds([5, 6])

    expect(stores.filter.getFilterParams).toMatchObject({
      selected_descriptors: '67:1168|1169',
      keyword_ids: [127],
      row_filter: '5|6',
      otu_filter: '1|2'
    })
  })
})
