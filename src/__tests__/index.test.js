import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'
 
describe('Home', () => {
  it('renders a main tag', () => {
    render(<Home />)
 
    const heading = screen.getByRole('main')
 
    expect(heading).toBeInTheDocument()
  })
})