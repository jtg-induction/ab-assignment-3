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

export const checkFollowedStatus = async (uname: string) => {
  const config = requestConfig(
    'GET',
    `${Constants.API.FOLLOW_USER_URL}/${uname}`
  )
  return instance(config)
    .then(
      (response: any) =>
        response.status === Constants.RESPONSE_STATUS_CODES.NO_CONTENT
    )
    .catch((e) => {
      console.clear()
      return false
    })
}
