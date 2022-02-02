import { render } from '@testing-library/react'
import { Top } from '..'

describe('Top', () => {
  it('render', () => {
    const screen = render(<Top />)
    expect(screen.getByRole('main'))
    expect(screen.getByRole('contentinfo'))
  })
})
