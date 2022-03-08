
import './statsCard.css'
const StatsCard = ({title, distance, time, elevation_gain}) => {
 

  return (
    <div className='StatsCard'>
      <h2>{title}</h2>
      <div className='StatsCard__details'>
        <p>Distance: {distance}</p>
        <p>Moving Time: {time}</p>
        <p>Elevation gain: {elevation_gain} </p>
      </div>
    </div>  
  )
}

export default StatsCard
