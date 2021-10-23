import React, { useRef, useEffect, ReactElement } from 'react'
import { AnyAction, Dispatch } from 'redux'
import { setShowStatus } from '@App/store/search'
import { useDispatch } from 'react-redux'
const OutsideAlerter: React.FC<{ children: ReactElement }> = (props) => {
  const ref: any = useRef(null)
  const dispatch: Dispatch<AnyAction> = useDispatch()
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch(setShowStatus(false))
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, dispatch])

  return <div ref={ref}>{props.children}</div>
}

export default OutsideAlerter
