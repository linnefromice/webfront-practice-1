import * as NextImage from 'next/image'
import { VIEWPORTS } from '../src/config/storybook'
import { globalDecorators } from './decorators'

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => (
    <img className={props.className} src={props.src} alt={props.alt} />
  ),
})

export const paramters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'iPhone12',
    viewports: VIEWPORTS,
  },
}

export const decorators = globalDecorators
