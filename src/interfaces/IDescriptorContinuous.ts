import { IDescriptor } from './IDescriptor'

export interface IDescriptorContinuous extends IDescriptor {
  defaultUnit: string,
  max: string,
  min: string
}
