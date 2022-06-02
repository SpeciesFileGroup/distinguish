import { IKeyword } from '@/interfaces'

export const makeKeyword = (data: any): IKeyword => ({
  keywordId: data.id,
  definition: data.description,
  name: data.name,
})
