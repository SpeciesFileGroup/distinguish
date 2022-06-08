import { DescriptorFilter } from '@/types';
type TFilter = { [index: number]: DescriptorFilter }

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