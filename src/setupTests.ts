import { beforeAll, afterEach, afterAll } from 'vitest'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { interactiveKeyResponse } from './mock/observationMatrixRequest'

export const restHandlers = [
  rest.get('*/tasks/observation_matrices/interactive_key/:matrixId/key', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(interactiveKeyResponse))
  })
]

const server = setupServer(...restHandlers)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

afterAll(() => server.close())

afterEach(() => server.resetHandlers())
