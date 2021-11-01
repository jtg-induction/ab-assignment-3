import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Search from '..'
it('image test', () => {
  const container = render(<Search />)
  const inputField = container.getByTestId('input')
  expect(inputField.children).toBeNull()
})
