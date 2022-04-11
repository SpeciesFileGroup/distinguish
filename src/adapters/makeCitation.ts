import { ICitation } from "../interfaces"

export const makeCitation = (data: any): ICitation => ({
  author: data?.cached_author_string,
  label: data?.citation.cached,
  year: data?.citation.year
})
