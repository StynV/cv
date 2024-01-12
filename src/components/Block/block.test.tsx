import { render, screen } from '@testing-library/react'
import Block from './Block'

describe('Block', () => {
  it('renders a Block', () => {
    const { container, getByText } = render(<Block title='title' period='period'><p>children</p></Block>)

    expect(container).toMatchSnapshot()

    expect(getByText('title', { selector: 'div' })).toBeTruthy()
    expect(getByText('period', { selector: 'h3' })).toBeTruthy()
    expect(getByText('children', { selector: 'p' })).toBeTruthy()
  })
})