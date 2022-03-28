import { CharacterState } from "../interfaces"

export const makeCharacterState = (data: any): CharacterState => ({
  characterStateId: data.id,
  label: data.label,
  name: data.name,
  numberOfObjects: data.number_of_objects,
  position: data.position,
  status: data.status
})
