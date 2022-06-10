import { DescriptorFilter } from '@/types';
type TFilter = { [index: number]: DescriptorFilter }

export interface IKeyFilter {
  descriptors: TFilter,
  eliminateUnknown?: boolean,
  errorTolerance?: number,
  identifiedToRank?: string,
  keywordIds: Array<number>,
  languageId?: number,
  rowIds: Array<number>,
  sorting?: string
}