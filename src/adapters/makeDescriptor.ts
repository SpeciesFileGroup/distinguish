import { IDescriptor } from "../interfaces"

export const makeDescriptor = (data: any): Descriptor => ({
  descriptorId: data.id
})
