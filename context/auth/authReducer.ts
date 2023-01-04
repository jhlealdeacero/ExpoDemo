
import { AuthState } from './';

type AuthActionType =
  {
    type: 'Auth - Set Token',
    payload: string | null
  }
  |
  {
    type: 'Auth - Set Loading',
    payload: boolean
  }

export const authReducer = (state: AuthState, action: AuthActionType): AuthState => {

  switch (action.type) {
    case 'Auth - Set Token':
      return {
        ...state,
        token: action.payload
      }
    default:
      return state
  }
}