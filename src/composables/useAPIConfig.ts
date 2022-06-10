import { IAPIConfiguration } from "@/interfaces"
import { reactive, toRefs } from "vue"

const state = reactive<IAPIConfiguration>({
  baseURL: '',
  projectId: undefined,
  projectToken: undefined,
  userToken: undefined
})

export const useAPIConfig = () => {
  const updatePreferences = (preferences: IAPIConfiguration) => {
    Object.assign(state, preferences)
  }

  return {
    ...toRefs(state),
    updatePreferences
  }
}
