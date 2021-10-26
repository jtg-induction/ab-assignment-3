import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppRoute } from '@Constants/index'
import GuardedRoute from './GuardedRoutes'
import { LoginPage, ProfilePage, PageNotFound } from '@Pages/index'
import { Profile } from '@App/containers'
import { SearchPage } from '@App/pages/searchPage'

export const Routes: React.FC = () => {
  const { isLoggedIn } = useSelector((state: IAppState) => state.login)
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
        <Route
          path={`${AppRoute.PublicRoutes.Search}/:query`}
          component={SearchPage}
          exact
        />
        <Route path="/:id/:isFollowed?" component={ProfilePage} exact />
        <Route
          path={AppRoute.PublicRoutes.Root}
          render={() => <Redirect to={AppRoute.PublicRoutes.SignIn} />}
          exact
        />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )
}
