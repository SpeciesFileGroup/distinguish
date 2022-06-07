type TFilter = { [index: number]: string | boolean | Array<number> }

export interface IKeyFilter {
  descriptors: TFilter,
  eliminateUknown?: boolean,
  errorTolerance?: number,
  identifiedToRank?: string,
  keywordIds: Array<number>,
  languageId?: number,
  otuFilter: Array<number>,
  sorting?: string
}