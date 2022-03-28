import { IDescriptor } from './Descriptor'

export interface IDescriptorContinuous extends IDescriptor {
  defaultUnit: string,
  max: string,
  min: string
}
