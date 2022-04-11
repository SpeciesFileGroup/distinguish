import { IInteractiveKey } from "../interfaces"

export const makeInteractiveKey = (data: any): IInteractiveKey => ({
  remaning: data.remaning,
  eliminated: data.eliminated,
  descriptorAvailableKeywords: data.descriptor_available_keywords,
  descriptorAvailableLanguages: data.descriptor_available_languages,
})
