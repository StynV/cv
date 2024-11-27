import { render, screen } from '@testing-library/react'

import Footer from './Footer'

describe('Footer', () => {
  it('renders a Footer', () => {
    const { container, getByText } = render(<Footer />)

    expect(container).toMatchSnapshot()

    expect(container.querySelector('footer')).toHaveClass('footer')

    expect(
      container.querySelector('a[href="https://github.com/StynV/cv"]')
    ).toBeVisible()
    expect(container.querySelector('img')).toBeVisible()
  })
})
