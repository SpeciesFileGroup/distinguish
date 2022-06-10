import { IDescriptor } from './IDescriptor'

export interface IDescriptorSample extends IDescriptor {
  defaultUnit: string,
  max: string,
  min: string
}
