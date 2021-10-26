import { Route, Redirect, Switch } from 'react-router-dom'
import { PageNotFound, ProfilePage } from '@Pages/index'
import { Profile } from '@App/containers'
import { AppRoute } from '@Constants/index'
import { SearchPage } from '@App/pages/searchPage'

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
