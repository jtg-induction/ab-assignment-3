import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppRoute } from '@Constants/index'
import GuardedRoute from './GuardedRoutes'
import { LoginPage, ProfilePage } from '@Pages/index'
import { PageNotFound } from '@App/pages/404'

export const Routes: React.FC = () => {
  const { isLoggedIn } = useSelector((state: IAppState) => state.user)
  return (
    <Router>
      <Switch>
        <Route
          path={AppRoute.PublicRoutes.SignIn}
          component={LoginPage}
          exact
        />
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
          Component={ProfilePage}
          auth={isLoggedIn}
        />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )
}
