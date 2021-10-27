import { PropsWithChildren, ReactElement } from 'react'
import { Route, Redirect } from 'react-router-dom'

interface P {}
type PropsI = {
  auth: boolean
  path: string
  component: (
    props: PropsWithChildren<P>,
    context?: any
  ) => ReactElement<any, any> | null
}

const GuardedRoute: React.FC<PropsI> = ({
  component: Component,
  auth,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      auth === true ? <Component {...props} /> : <Redirect to="/" />
    }
  />
)

export default GuardedRoute
