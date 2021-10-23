import { API } from '@Constants/api'
import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'

export const SearchService = async (query: string) => {
  if (query.length === 0) {
    return false
  }

  try {
    const response: AxiosResponse<any, any> = await axios.get(
      API.SEARCH_QUERY_URL,
      {
        params: {
          per_page: API.MAX_SEARCH_RESPONSE,
          q: query,
        },
        auth: {
          username: 'arjun-bhatt-670',
          password: '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',
        },
      }
    )

    const jsonObj = await response.data
    const users: SearchedUserState[] = []
    jsonObj.items.forEach((user: any) => {
      users.push({
        id: user.id,
        username: user.login,
        avatarUrl: user.avatar_url,
        profileUrl: user.url,
      })
    })

    console.log(jsonObj)
    return users

    // setUsers(response.data.data)
    //     }catch (error) {
    //         if (axios.isAxiosError(error)) {
    //           handleAxiosError(error);
    //         } else {
    //           handleUnexpectedError(error);
    //         }
  } catch (e) {
    return false
    // console.log(e)
  }
  // loadUsers()
  //   })
}

export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler: NodeJS.Timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Cancel the timeout if value changes (also on delay change or unmount)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
