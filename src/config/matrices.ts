import { IKeyConfiguration } from '@/interfaces/IKeyConfiguration'

export default ((): IKeyConfiguration => ({
  startingMatrixId: 24, // Set the matrix that will be loaded at the first time.
  visibleMatrices: [23, 24] // Set matrices id list. Leave empty if you don't want to set more that one
}))()
