import React, { FC, useEffect, useReducer, useState } from 'react'
import { AuthContext, authReducer } from '.'
import AsyncStorage from '@react-native-async-storage/async-storage';


export interface AuthState {
  token: string | null
}

interface Props {
  children: JSX.Element
}

const AUTH_INITIAL_STATE: AuthState = {
  token: null
}

export const AuthProvider: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)

  const setToken = (token: string | null) => {
    dispatch({ type: 'Auth - Set Token', payload: token })
  }



  useEffect(() => {
    async function fetchData() {

      let token

      try {
        token = await AsyncStorage.getItem('token')

        if (!token) return

        setToken(token)

      } catch (e) {
        // saving error
      }



      //Revalidar token

      /* api.get<any>('/api/auth/renew/', {
        headers: {
          'Content-type': 'application/json',
          'x-token': token || ''
        }
      }).then(({ data }) => {
        setUser(data)
        setLoading(false)

      }).catch((error) => {
        setLoading(false)
      }) */
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state


  return (
    <AuthContext.Provider value={{
      ...state,
      setToken,
    }}>
      {
        children
      }
    </AuthContext.Provider>
  )
}