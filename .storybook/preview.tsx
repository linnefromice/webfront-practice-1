import { VIEWPORTS } from '../src/__tests__/config/storybook'
import { globalDecorators } from './decorators'

export const paramters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'iPhone12',
    viewports: VIEWPORTS,
  },
}

export const decorators = globalDecorators
