import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SuggestionRow from '..'
it('image test', () => {
  const container = render(<SuggestionRow />)
  const image = container.getByTestId('image')
  expect(image.attributes).toHaveLength(2)
})
