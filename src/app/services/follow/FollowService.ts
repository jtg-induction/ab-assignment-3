import Constants from '@Src/constants'
import { instance, requestConfig } from '@Services/Service'
import { FollowServiceType } from './type'

const FollowService: FollowServiceType = async (uname) => {
  const followRequestConfig = requestConfig(
    'PUT',
    `${Constants.API.FOLLOW_USER_URL}/${uname}`
  )

  return instance(followRequestConfig)
}
export default FollowService
