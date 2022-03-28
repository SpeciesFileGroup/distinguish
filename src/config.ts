import { IAPIConfiguration } from "./interfaces"

export default ((): IAPIConfiguration => ({
  baseURL: '',
  projectId: undefined,
  projectToken: undefined,
  userToken: undefined
}))()
