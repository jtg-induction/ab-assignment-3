import { Route, Redirect } from 'react-router-dom'

type PropsI = {
  auth: boolean
  path: string
  toPath: string
  Component: React.FC
}

const GuardedRoute: React.FC<PropsI> = (props) => {
  const { auth, toPath, Component, ...rest } = props
  return (
    <Route
      {...rest}
      render={() => (auth === true ? <Component /> : <Redirect to={toPath} />)}
      exact
    />
  )
}

export default GuardedRoute
