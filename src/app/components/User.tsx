import { useAppSelector } from '../hooks'

export interface Userd {
  name: string
}

export const User: React.FC = () => {
  const { name }: Userd = useAppSelector((state) => state.user.value)
  return <div>My name is {name}</div>
}
