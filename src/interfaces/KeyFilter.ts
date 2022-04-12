type TFilter = { [index: number]: string | boolean | Array<number> }

export interface IKeyFilter {
  descriptors: TFilter,
  eliminateUknown?: boolean,
  errorTolerance?: undefined,
  identifiedToRank?: string,
  keywordIds: Array<number>,
  languageId?: number | undefined,
  otuFilter: Array<number>,
  sorting?: string
}