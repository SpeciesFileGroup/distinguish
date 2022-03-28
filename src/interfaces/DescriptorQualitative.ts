import { Descriptor } from './Descriptor'
import { CharacterState } from './CharacterState'

export interface DescriptorQualitative extends Descriptor {
  characterStates: Array<CharacterState>,
}