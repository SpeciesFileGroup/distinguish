import { IDepiction } from "../interfaces"

export const makeDepiction = (data: any): IDepiction => ({
  depictionId: data.id,
  caption: data.caption,
  figureLabel: data.figure_label,
  imageUrl: data.image.medium
})
