import { render, screen } from '@testing-library/react'
import Block from './Block'

describe('Block', () => {
  it('renders a Block', () => {
    const { container, getByText } = render(<Block title='title' period='period'><p>children</p></Block>)

    expect(container).toMatchSnapshot()

    expect(container.querySelector('article')).toHaveClass('block notInView')
    expect(container.getElementsByClassName('squareBlock')[0]).toBeVisible()
    expect(container.getElementsByClassName('square')[0]).toBeVisible()
    expect(container.getElementsByClassName('line')[0]).toBeVisible()
    expect(container.getElementsByClassName('squareLeft')[0]).toBeVisible()
    expect(container.getElementsByClassName('squareRight')[0]).toBeVisible()

    expect(container.getElementsByClassName('textBlock')[0]).toBeVisible()
    expect(container.getElementsByClassName('blockHeader')[0]).toBeVisible()

    expect(container.getElementsByClassName('title')[0]).toBeVisible()
    expect(getByText('title', { selector: 'div' })).toBeTruthy()

    expect(container.querySelector('h3')).toHaveClass('period')
    expect(getByText('period', { selector: 'h3' })).toBeTruthy()
    
    expect(getByText('children', { selector: 'p' })).toBeTruthy()
  })
})