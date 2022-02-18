import { ComponentMeta, ComponentStory } from '@storybook/react'
import { VIEWPORT_ALL } from 'src/config/storybook'
import { Footer as FooterComponent } from '.'

export default {
  title: 'components/parts/Footer',
  parameters: { screenshot: { ...VIEWPORT_ALL } },
} as ComponentMeta<typeof FooterComponent>

export const Footer: ComponentStory<typeof FooterComponent> = () => (
  <FooterComponent />
)
