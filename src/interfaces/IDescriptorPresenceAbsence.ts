import { IDescriptor, IDescriptorState } from './index'

export interface IDescriptorPresenceAbsence extends IDescriptor {
  states: Array<IDescriptorState>
}
