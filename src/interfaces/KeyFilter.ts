type TFilter = { [index: number]: string | boolean | Array<number> }

export interface IKeyFilter {
  descriptors: TFilter,
  eliminateUknown?: undefined,
  errorTolerance?: undefined,
  identifiedToRank?: undefined,
  keywordIds: Array<number>,
  languageId?: number | undefined,
  otuFilter: Array<number>,
  sorting?: string
}