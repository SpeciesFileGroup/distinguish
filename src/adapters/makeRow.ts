import { IRow } from "../interfaces"

export const makeRow = (data: any): IRow => ({
  errorDescriptors: data.error_descriptors,
  errors: data.errors,
  objectLabel: data.object.object_label,
  objectTag: data.object.object_tag,
  observationObjectId: data.object.observation_object_id,
  observationObjectType: data.object.observation_object_type,
  rowId: data.object.id
})
