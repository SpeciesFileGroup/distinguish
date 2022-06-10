import { IDescriptor } from './IDescriptor'
import { ICharacterState } from './ICharacterState'

export interface IDescriptorQualitative extends IDescriptor {
  characterStates: Array<ICharacterState>,
}