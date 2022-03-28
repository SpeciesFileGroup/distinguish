import { Depiction } from "../interfaces"

export const makeDescriptor = (data: any): Depiction => ({
  depictionId: data.id,
  caption: data.caption,
  figureLabel: data.figure_label,
  imamgeUrl: data.image.alternatives.medium.image_file_url
})
