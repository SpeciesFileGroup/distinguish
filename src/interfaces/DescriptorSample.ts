import { Descriptor } from './Descriptor'

export interface DescriptorSample extends Descriptor {
  defaultUnit: string,
  max: string,
  min: string
}
