import React from 'react'
import { VIEWPORT_ALL } from 'src/__tests__/config/storybook'
import Sample from '.'

export default {
  title: 'components/Sample',
  paramters: {
    screenshot: {
      variants: {
        ...VIEWPORT_ALL,
      },
    },
  },
}

export const Component = () => <Sample />
