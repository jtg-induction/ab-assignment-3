import React from 'react'
import { render } from '@testing-library/react'
import { TextField } from '..'
import * as ReactDOM from 'react-dom'
// import {renderer} from 'react-test-renderer'

describe('textfield component tests', () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(
      <TextField name="username" margin="none" label="username" type="text" />,
      container
    )
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })
  it('renders initial document', () => {
    const inputs = container.querySelectorAll('input')
    expect(inputs).toHaveLength(1)
  })
})
