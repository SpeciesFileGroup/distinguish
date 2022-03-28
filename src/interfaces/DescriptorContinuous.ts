import { Descriptor } from './Descriptor'

export interface DescriptorContinuous extends Descriptor {
  defaultUnit: string,
  max: string,
  min: string
}
