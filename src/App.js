import './App.css';
import Header from './components/header/Header';
import { Routes, Route, Navigate} from 'react-router-dom'

import Activities from './pages/ActivitiesPage/Activities';
import MonthlyStats from './pages/MonthlyPage/MonthlyStats';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchactivitiesInfo } from './app/slices/activitiesInfo/activitiesSlice';
import { fetchUserInfo } from './app/slices/userInfo/userSlice';
import { getTimeStamp } from './utils/getTimeStamp';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchactivitiesInfo())
  },[dispatch])


  useEffect(() => {
    dispatch(fetchUserInfo())
  },[dispatch])

  const result = getTimeStamp();
  console.log(result)

  return (
    <div className="App mainLayout">    
        <Header />
        <Routes>
          <Route path='/' element={<Activities />} />
          <Route path='/monthly-stats' element={<MonthlyStats/>} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    </div>
  );
}

export default App;
