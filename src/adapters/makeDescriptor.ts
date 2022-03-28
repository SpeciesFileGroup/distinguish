import { Descriptor } from "@/models"

export const makeDescriptor = (data: any): Descriptor => ({
  descriptorId: data.id
})
