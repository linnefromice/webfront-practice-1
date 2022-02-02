import { ComponentMeta, ComponentStory } from '@storybook/react'
import { VIEWPORT_ALL } from 'src/config/storybook'
import { Top as TopComponent } from '.'

export default {
  title: 'components/compositions/Top',
  parameters: { screenshot: { variants: { ...VIEWPORT_ALL } } },
} as ComponentMeta<typeof TopComponent>

export const Top: ComponentStory<typeof TopComponent> = () => <TopComponent />
