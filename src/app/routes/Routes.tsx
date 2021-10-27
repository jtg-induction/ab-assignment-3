import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Login, Profile } from '@Containers/index'
import { AppRoute } from '@Constants/index'
import { PageNotFound } from '@App/pages/404'
import GuardedRoute from './GuardedRoutes'

export const Routes: React.FC = () => {
  const { isLoggedIn } = useSelector((state: IAppState) => state.user)
  return (
    <Router>
      <Switch>
        <GuardedRoute
          auth={!isLoggedIn}
          path={AppRoute.PublicRoutes.SignIn}
          Component={Login}
          pathTo={AppRoute.PrivateRoutes.Profile}
        />
        <GuardedRoute
          auth={isLoggedIn}
          Component={Profile}
          path={AppRoute.PrivateRoutes.Profile}
          pathTo={AppRoute.PublicRoutes.SignIn}
        />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )
}
