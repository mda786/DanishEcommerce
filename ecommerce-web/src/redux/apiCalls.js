import { regFailure, regStart, regSuccess } from "./regRedux"
import { loginFailure, loginStart, loginSuccess ,logoutSuccess} from "./userRedux"
import {publicRequest} from '../requestMethod'
import { persistor } from './store';

export const login = async(dispatch,user)=>{
    dispatch(loginStart())
    try{
        const res=await publicRequest.post('/auth/login',user)
        dispatch(loginSuccess(res.data))
        localStorage.setItem()
        console.log(res.data);
    }catch{
        dispatch(loginFailure())
    }
}

export const register=async(dispatch,user)=>{
    dispatch(regStart())
    try{
        const res = await publicRequest.post('/auth/register',user)
        
        dispatch(regSuccess(res.data))
    }catch{
        dispatch(regFailure())
    }
}

export const logout = (dispatch) => {
    dispatch(logoutSuccess())
    persistor.purge();
  }


