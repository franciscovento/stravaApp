import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userinfo: {

    },
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userinfo = action.payload
    }
  }
})


export const  { setUserInfo } = userSlice.actions
export default userSlice.reducer;

export const fetchUserInfo = () => (dispatch) => {
  try{
    const getData = async () => {
      let { data } = await axios.post(`https://www.strava.com/oauth/token?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&grant_type=refresh_token&refresh_token=${process.env.REACT_APP_REFRESH_TOKEN}`)
      const resp = await axios.get('https://www.strava.com/api/v3/athlete',{
         headers: {
           'Authorization': `Bearer ${data.access_token}` 
         }
       })
       dispatch(setUserInfo(resp.data))
     }
     getData()



  }catch(e){
    console.log(e)
  }

  
   
}