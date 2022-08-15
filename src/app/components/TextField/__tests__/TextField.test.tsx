import React from 'react'
import { render } from '@testing-library/react'
import TextField from '..'
import * as ReactDOM from 'react-dom'

describe('textfield component tests', () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(<TextField />, container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })
  it('renders only one text field', () => {
    const inputs = container.querySelectorAll('input')
    expect(inputs).toHaveLength(1)
  })
})
