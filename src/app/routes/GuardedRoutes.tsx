import { PageNotFound } from '@App/pages/404'
import { Route, Redirect, Switch } from 'react-router-dom'

type PropsI = {
  auth: boolean
  path: string
  pathTo: string
  Component: React.FC
}

const GuardedRoute: React.FC<PropsI> = (props) => {
  const { auth, pathTo, Component, ...rest } = props
  return (
    <Switch>
      <Route
        {...rest}
        render={() =>
          auth === true ? <Component /> : <Redirect to={pathTo} />
        }
        exact
      />
      <Route component={PageNotFound} />
    </Switch>
  )
}

export default GuardedRoute
