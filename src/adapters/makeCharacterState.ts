import { ICharacterState } from "../interfaces"
import { makeDescriptorState } from './index'

export const makeCharacterState = (data: any): ICharacterState => ({
  characterStateId: data.id,
  depictionIds: data.depiction_ids,
  label: data.label,
  position: data.position,
  ...makeDescriptorState(data)
})
