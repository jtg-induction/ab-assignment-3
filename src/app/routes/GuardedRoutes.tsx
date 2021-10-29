import { PageNotFound } from '@App/pages/404'
import { Route, Redirect, Switch } from 'react-router-dom'

type PropsI = {
  auth: boolean
  path: string
  toPath: string
  Component: React.FC
}

const GuardedRoute: React.FC<PropsI> = (props) => {
  const { auth, toPath, Component, ...rest } = props
  return (
    <Switch>
      <Route
        {...rest}
        render={() =>
          auth === true ? <Component /> : <Redirect to={toPath} />
        }
        exact
      />
      <Route component={PageNotFound} />
    </Switch>
  )
}

export default GuardedRoute
