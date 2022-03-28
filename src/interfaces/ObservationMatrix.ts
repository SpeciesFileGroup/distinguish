export interface ObservationMatrix {
  citation: {
    author: string | undefined,
    label: string | undefined,
    year: number | undefined
  },
  descriptorAvailableKeywords: Array<object>
  descriptorAvailableLanguages: Array<object>
  eliminated: Array<object>,
  globalId: string,
  name: string,
  observationMatrixId: number,
  remaning: Array<object>
}