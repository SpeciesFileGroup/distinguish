import { IKeyConfiguration } from '@/interfaces/IKeyConfiguration'

export default ((): IKeyConfiguration => ({
  startingMatrixId: 1, // Set the matrix that will be loaded at the first time.
  visibleMatrices: [] // Set matrices id list. Leave empty if you don't want to set more that one
}))()
