import { IAPIConfiguration } from '@/interfaces/IAPIConfiguration'
import { createApp, App } from 'vue'
import { createPinia } from 'pinia'
import VueInteractiveKey from '../App.vue'
import '@/assets/stylesheets/main.scss'

function discoverInteractiveKey(selector?: string): Array<App> {
  const tag: string = selector || '[data-interactive-key="true"]'
  const elements: NodeListOf<HTMLElement> = document.querySelectorAll(tag)
  const elementsList: Array<HTMLElement> = [...elements]

  return elementsList.map((element) =>
    createInteractiveKey(element, parseElementOptions(element))
  )
}

function autoDiscover(): void {
  discoverInteractiveKey()
}

function parseElementOptions(element: HTMLElement): {
  observationMatrixId: number
  apiConfig: IAPIConfiguration
} {
  return {
    observationMatrixId: Number(
      element.getAttribute('data-observation-matrix-id')
    ),
    apiConfig: {
      baseURL: element.getAttribute('data-base-url') || '',
      projectToken: element.getAttribute('data-project-token') || undefined,
      projectId: Number(element.getAttribute('data-project-id')) || undefined,
      userToken: element.getAttribute('data-user-token') || undefined,
      csrfToken: element.getAttribute('data-csrf-token') || undefined
    }
  }
}

function createInteractiveKey(
  element: HTMLElement | string,
  opt: { apiConfig: IAPIConfiguration; observationMatrixId: number }
): App {
  const { apiConfig, observationMatrixId } = opt

  if (!observationMatrixId) {
    throw 'Missing observation matrix ID'
  }

  if (
    !apiConfig ||
    (!apiConfig.projectToken &&
      !apiConfig.csrfToken &&
      !(apiConfig.projectId && apiConfig.userToken))
  ) {
    throw 'Missing API configuration'
  }

  const app = createApp(VueInteractiveKey, {
    observationMatrixId,
    apiConfig
  })

  app.use(createPinia())
  app.mount(element)

  return app
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', autoDiscover)
}

export { createInteractiveKey, discoverInteractiveKey, VueInteractiveKey }
