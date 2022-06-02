import { ILanguage } from "@/interfaces"

export const makeLanguage = (data: any): ILanguage => ({
  languageId: data.id,
  name: data.english_name
})