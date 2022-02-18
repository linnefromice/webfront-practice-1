import { ComponentMeta, ComponentStory } from '@storybook/react'
import { VIEWPORT_ALL } from 'src/config/storybook'
import { Products as ProductsComponent } from '.'
import { PRODUCTS } from '../../compositions/Top'

export default {
  title: 'components/parts/Products',
  parameters: { screenshot: { variants: { ...VIEWPORT_ALL } } },
} as ComponentMeta<typeof ProductsComponent>

export const Products: ComponentStory<typeof ProductsComponent> = () => (
  <ProductsComponent products={PRODUCTS} />
)
