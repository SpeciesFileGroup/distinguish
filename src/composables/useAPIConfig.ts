import { IAPIConfiguration } from "@/interfaces"

const state: IAPIConfiguration = {
  baseURL: '',
  projectId: undefined,
  projectToken: undefined,
  userToken: undefined
}

export const useAPIConfig = () => {
  const updatePreferences = (preferences: IAPIConfiguration) => {
    Object.assign(state, preferences)
  }

  return {
    ...state,
    updatePreferences
  }
}
