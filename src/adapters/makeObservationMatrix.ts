import { IObservationMatrix } from "../interfaces"

export const makeObservationMatrix = (data: any): IObservationMatrix => ({
  observationMatrixId: data.observation_matrix_id,
  name: data.name,
  globalId: data.global_id,
  remaning: data.remaning,
  eliminated: data.eliminated,
  descriptorAvailableKeywords: data.descriptor_available_keywords,
  descriptorAvailableLanguages: data.descriptor_available_languages,
  citation: {
    author: data?.observation_matrix_citation?.cached_author_string,
    label: data?.observation_matrix_citation?.citation.cached,
    year: data?.observation_matrix_citation?.citation.year
  },
})
