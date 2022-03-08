import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const activitiesSlice = createSlice({
  name: 'activities',
  initialState: {
    activitiesInfo: [],
  },
  reducers: {
    setActivitiesInfo: (state, action) => {
      state.activitiesInfo = action.payload
    },
    filterBymonthInfo: (state, action) => {
      state.activitiesInfo = action.payload
    }
  }
})


export const  { setActivitiesInfo, filterBymonthInfo } = activitiesSlice.actions
export default activitiesSlice.reducer;

export const fetchactivitiesInfo = () => (dispatch) => {
  try{
    const getData = async () => {
      let { data } = await axios.post(`https://www.strava.com/oauth/token?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&grant_type=refresh_token&refresh_token=${process.env.REACT_APP_REFRESH_TOKEN}`)
      const resp = await axios.get('https://www.strava.com/api/v3/athlete/activities',{
         headers: {
           'Authorization': `Bearer ${data.access_token}`
         }
       })
       dispatch(setActivitiesInfo(resp.data))
     }
     getData()
  }catch(e){
    console.log(e)
  } 
}

export const filterBymonth = (diference) => (dispatch) =>{
  try{
    const getData = async () => {
      let { data } = await axios.post(`https://www.strava.com/oauth/token?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&grant_type=refresh_token&refresh_token=${process.env.REACT_APP_REFRESH_TOKEN}`)
      const resp = await axios.get(`https://www.strava.com/api/v3/athlete/activities?after=${diference}`,{
         headers: {
           'Authorization': `Bearer ${data.access_token}`
         }
       })
       dispatch(filterBymonthInfo(resp.data))
     }
     getData()
  }catch(e){
    console.log(e)
  } 
}