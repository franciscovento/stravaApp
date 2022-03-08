import './card.css'

const Card = ({name, date, distance, time, elevation}) => {
  return (
    <div className="Card">
    <h3>{name} </h3>  
    <p>Date: {date} </p>
    <p>Distance: {distance}</p>
    <p>Time: {time}</p>
    <p>Elevation gain: {elevation}</p>
  </div>
  )
}

export default Card
