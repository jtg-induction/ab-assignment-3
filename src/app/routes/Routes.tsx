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
        <GuardedRoute
          path={AppRoute.PublicRoutes.SignIn}
          Component={LoginPage}
          auth={!isLoggedIn}
          toPath={AppRoute.PrivateRoutes.Profile}
        />
        <GuardedRoute
          path={AppRoute.PrivateRoutes.Profile}
          Component={ProfilePage}
          auth={isLoggedIn}
          toPath={AppRoute.PublicRoutes.SignIn}
        />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )
}
