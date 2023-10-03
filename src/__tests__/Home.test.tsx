import Home from '@/app/page'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Rendering Tests', () => {
	it('Should contain the text "Liga"', () => {
		// Arrange
		render(<Home />)

		// Act
		const myElem = screen.getByText('Liga')

		// Assert
		expect(myElem).toBeInTheDocument()
	})
})
