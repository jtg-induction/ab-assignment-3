import React, { useRef, useEffect } from 'react'
import { AnyAction, Dispatch } from 'redux'
import { setShowStatus } from '@App/store/search'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref: any) {
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
}

/**
 * Component that alerts if you click outside of it
 */
const OutsideAlerter: React.FC<{ children: any }> = (props) => {
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

  return <div ref={wrapperRef}>{props.children}</div>
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
}

export default OutsideAlerter
