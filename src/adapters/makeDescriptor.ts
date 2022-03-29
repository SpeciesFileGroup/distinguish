import { IDescriptor } from "../interfaces"

export const makeDescriptor = (data: any): IDescriptor => ({
  descriptorId: data.id,
  name: data.name,
  description: data.description,
  position: data.position,
  status: data.status,
  type: data.type,
  depictionIds: data.depiction_ids,
  usefulness: data.usefulness,
  weight: data.weight
})
