import { ICharacterState } from "../interfaces"

export const makeCharacterState = (data: any): ICharacterState => ({
  characterStateId: data.id,
  label: data.label,
  name: data.name,
  numberOfObjects: data.number_of_objects,
  position: data.position,
  status: data.status
})
