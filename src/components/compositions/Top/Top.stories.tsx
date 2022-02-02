import { VIEWPORT_ALL } from 'src/config/storybook'
import { Top } from '.'

export default {
  title: 'components/compositions/Top',
  parameters: { screenshot: { variants: { ...VIEWPORT_ALL } } },
}

export const Component = () => <Top />
