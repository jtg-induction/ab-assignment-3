import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@App/store'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from '..'
test('login title test', async () => {
  const container = render(
    <Provider store={store}>
      <Login />
    </Provider>
  )
  const title = container.getByText('Sign in to GitHub')
  expect(title).toBeInTheDocument()
})
