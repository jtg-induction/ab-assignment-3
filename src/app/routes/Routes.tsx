import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import constants from '@Constants/index'
import { LoginPage, ProfilePage, PageNotFound } from '@Pages/index'
import { SearchPage } from '@App/pages/searchPage'
import GuardedRoute from './GuardedRoutes'

export const Routes: React.FC = () => {
  const { isLoggedIn } = useSelector((state: IAppState) => state.login)
  return (
    <Router>
      <Switch>
        <GuardedRoute
          path={constants.PublicRoutes.SignIn}
          Component={LoginPage}
          auth={!isLoggedIn}
          toPath={constants.PrivateRoutes.Profile}
        />
        <GuardedRoute
          path={constants.PrivateRoutes.Profile}
          Component={ProfilePage}
          auth={isLoggedIn}
          toPath={constants.PublicRoutes.SignIn}
        />
        <Route
          path={`${constants.PublicRoutes.Search}/:query`}
          component={SearchPage}
          exact
        />
        <Route path="/:id/:isFollowed?" component={ProfilePage} exact />
        <Route
          path={constants.PublicRoutes.Root}
          render={() => <Redirect to={constants.PublicRoutes.SignIn} />}
          exact
        />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )
}
