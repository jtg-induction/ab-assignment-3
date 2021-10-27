import React, { useState } from 'react'
import { useAppDispatch } from '@App/hooks'
import { changeName } from '@Actions/user'
import './styles.scss'
import './type.ts'

export const Button: React.FC = () => {
  const dispatch = useAppDispatch()
  const [name, setName] = useState('')
  return (
    <React.Fragment>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <button
        onClick={() => {
          dispatch(changeName({ name: name }))
        }}
      >
        Add name to user
      </button>
    </React.Fragment>
  )
}
