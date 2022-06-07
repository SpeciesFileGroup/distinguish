import { beforeAll, afterEach, afterAll } from 'vitest'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import {
  interactiveKeyResponse, 
  observationMatricesAutocompleteResponse
} from './mock/responses'

export const restHandlers = [
  rest.get('*/observation_matrices/:observationMatrixId/key', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(interactiveKeyResponse))
  }),

  rest.get('*/observation_matrices/autocomplete', (req, res, ctx) => {
    const queryString = req.url.searchParams.get('term')

    return res(ctx.status(200), ctx.json(
      queryString === 'Interactive'
        ? observationMatricesAutocompleteResponse
        : []
      ))
  })
]

const server = setupServer(...restHandlers)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

afterAll(() => server.close())

afterEach(() => server.resetHandlers())
