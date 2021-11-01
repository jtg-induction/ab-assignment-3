import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Constants from '@Constants/index'
import { LoginPage, ProfilePage, PageNotFound, SearchPage } from '@Pages/index'
import { AppBar } from '@Containers/index'
import GuardedRoute from './GuardedRoutes'

const Routes: React.FC = () => {
  const { isLoggedIn } = useSelector((state: IAppState) => state.login)
  return (
    <Router>
      <AppBar />
      <Switch>
        <GuardedRoute
          path={Constants.PublicRoutes.SignIn}
          Component={LoginPage}
          auth={!isLoggedIn}
          toPath={Constants.PrivateRoutes.Profile}
        />
        <GuardedRoute
          path={Constants.PrivateRoutes.Profile}
          Component={ProfilePage}
          auth={isLoggedIn}
          toPath={Constants.PublicRoutes.SignIn}
        />
        <Route
          path={`${Constants.PublicRoutes.Search}/:query`}
          component={SearchPage}
          exact
        />
        <Route
          path={Constants.userPath('id', 'isFollowed')}
          component={ProfilePage}
          exact
        />
        <Route
          path={Constants.PublicRoutes.Root}
          render={() => <Redirect to={Constants.PublicRoutes.SignIn} />}
          exact
        />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )
}
export default Routes
