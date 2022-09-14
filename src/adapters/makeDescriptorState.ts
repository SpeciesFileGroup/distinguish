import { IDescriptorState } from "@/interfaces"

export const makeDescriptorState = (data: any): IDescriptorState => ({
  name: data.name,
  numberOfObjects: data.number_of_objects,
  status: data.status
})
