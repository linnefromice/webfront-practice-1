import { composeStories } from '@storybook/testing-react'
import { render } from '@testing-library/react'
import * as stories from '../Top.stories'

const { Top } = composeStories(stories)

describe('Top', () => {
  it('render', () => {
    const screen = render(<Top />)
    expect(screen.getByRole('main'))
    expect(screen.getByRole('contentinfo'))
  })
})
