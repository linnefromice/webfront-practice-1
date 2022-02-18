import { ComponentMeta, ComponentStory } from '@storybook/react'
import { VIEWPORT_ALL } from 'src/config/storybook'
import { Header as HeaderComponent } from '.'

export default {
  title: 'components/parts/Header',
  parameters: { screenshot: { variants: { ...VIEWPORT_ALL } } },
} as ComponentMeta<typeof HeaderComponent>

export const Header: ComponentStory<typeof HeaderComponent> = () => (
  <HeaderComponent />
)
