
import './statsCard.css'
const StatsCard = ({title, distance, time, elevation_gain}) => {
 

  return (
    <div className='StatsCard'>
      <h2>{title}</h2>
      <div>
        <p>distance: {distance}</p>
        <p>time: {time}</p>
        <p>Elevation gain: {elevation_gain} </p>
      </div>
    </div>  
  )
}

export default StatsCard
