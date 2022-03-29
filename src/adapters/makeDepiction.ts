import { IDepiction } from "../interfaces"

export const makeDescriptor = (data: any): IDepiction => ({
  depictionId: data.id,
  caption: data.caption,
  figureLabel: data.figure_label,
  imamgeUrl: data.image.alternatives.medium.image_file_url
})
