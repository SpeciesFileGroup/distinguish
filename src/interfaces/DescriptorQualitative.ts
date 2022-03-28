import { IDescriptor } from './Descriptor'
import { ICharacterState } from './CharacterState'

export interface IDescriptorQualitative extends IDescriptor {
  characterStates: Array<ICharacterState>,
}