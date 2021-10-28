import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { Login } from '..'
test('login test', () => {
  render(<Login />)
})
