import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import StatsCard from '../../components/statsCard/StatsCard'
import { getDataForMonth, getMonthNames } from '../../utils/getTimeStamp'
import './monthlyStats.css'

const MonthlyStats = () => {

  const { activitiesInfo } = useSelector(state => state.activitiesReducer)

  const [ lastActivities, setLastActivities ] = useState()

  useEffect(() => {
    if (activitiesInfo.length  > 0 && activitiesInfo !== [] ) {
      setLastActivities(getDataForMonth(activitiesInfo))
    }
  }, [activitiesInfo])


  const months = getMonthNames();


  return (  
    <div className="MonthlyStats">
      <div className='MonthlyStats__StatsContainer'>
      {lastActivities !== undefined ? <StatsCard title={months.currentDate} distance={lastActivities.currentMonth.distance} time={lastActivities.currentMonth.time} elevation_gain={lastActivities.currentMonth.elevation_gain} /> : "" }
      {lastActivities !== undefined ? <StatsCard title={months.pastDate} distance={lastActivities.pastMonth.distance} time={lastActivities.pastMonth.time} elevation_gain={lastActivities.pastMonth.elevation_gain} /> : "" }
      {lastActivities !== undefined ? <StatsCard title={months.twoPastDate} distance={lastActivities.twoPastMonth.distance} time={lastActivities.twoPastMonth.time} elevation_gain={lastActivities.twoPastMonth.elevation_gain} /> : "" }
      </div>
    </div>
  )
}

export default MonthlyStats
