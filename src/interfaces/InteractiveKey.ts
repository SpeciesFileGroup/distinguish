import { Descriptor } from "../types"

export interface IInteractiveKey {
  descriptors: Array<Descriptor>
  descriptorAvailableKeywords: Array<object>
  descriptorAvailableLanguages: Array<object>
  eliminated: Array<object>,
  remaning: Array<object>
}