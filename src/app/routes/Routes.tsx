import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Button } from '@Components/Button'
import { User } from '@Components/User'
import * as path from '@Constants/routesPath'
import GuardedRoute from './GuardedRoutes'

export const Routes: React.FC = () => {
  return (
    <Router>
      <Route path={path.Home} exact>
        <Button />
        <User />
      </Route>
      <Route path={path.Profile} exact>
        ProfilePage
      </Route>
      <Route path={path.Search} exact>
        SearchBar
      </Route>
      <Route path={path.Suggestions} exact>
        Suggestions
      </Route>
      <GuardedRoute path={path.Profile} component={User} auth={false} />
    </Router>
  )
}
