import { beforeAll, afterEach, afterAll } from 'vitest'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import {
  interactiveKeyResponse,
  observationMatricesAutocompleteResponse
} from './mock/responses'

export const restHandlers = [
  http.get('*/observation_matrices/:observationMatrixId/key', () => {
    return HttpResponse.json(interactiveKeyResponse)
  }),

  http.get(
    '*/observation_matrices/autocomplete',
    ({ request }: { request: any }) => {
      const queryString = new URL(request.url).searchParams.get('term')

      return HttpResponse.json(
        queryString === 'Interactive'
          ? observationMatricesAutocompleteResponse
          : []
      )
    }
  )
]

const server = setupServer(...restHandlers)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

afterAll(() => server.close())

afterEach(() => server.resetHandlers())
