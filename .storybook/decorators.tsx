import { DecoratorFn } from '@storybook/react'
import { GlobalStyles } from '../src/styles/global-styles'

const GlobalStylesDecorator: DecoratorFn = (Story) => {
  return (
    <>
      <GlobalStyles />
      <div id="_next">
        <Story />
      </div>
    </>
  )
}

export const globalDecorators = [GlobalStylesDecorator]
