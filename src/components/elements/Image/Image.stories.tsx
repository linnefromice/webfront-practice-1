import { VIEWPORT_ALL } from 'src/config/storybook'
import {
  Image as ImageComponent,
  LoadingImage as LoadingImageComponent,
} from '.'

export default {
  title: 'components/elements/Image',
  parameters: {
    screenshot: {
      variants: {
        ...VIEWPORT_ALL,
      },
    },
  },
}

export const NormalImage = () => (
  <ImageComponent src={'https://picsum.photos/200/300'} alt="Lorem Picsum" />
)
export const LoadingImage = () => <LoadingImageComponent />
