import { IDescriptor } from './Descriptor'

export interface IDescriptorSample extends IDescriptor {
  defaultUnit: string,
  max: string,
  min: string
}
