import Card from '../../components/card/Card';
import './activitiesPage.css'


// redux
import {  useSelector } from 'react-redux'
import LoaderComponent from '../../components/loading/Loader';

const Activities = ({title="All Activities"}) => {

  const {activitiesInfo:data} = useSelector( state => state.activitiesReducer)
  

  return (
    <div className="ActivitiesPage">
        
        <h2>{title}</h2>
        <div className='ActivitiesPage__container'>
        { data.length > 0 ? data.map(x => {
          return (
            <Card 
            key={x.id} 
            name={x.name}
            distance={x.distance}
            time={x.elapsed_time}
            elevation={x.total_elevation_gain}
            date={new Date(x.start_date).toUTCString().split(' ', 4).join(' ')}
            />) 
        }) : <LoaderComponent />}
        </div>
    
    </div>
  )
}

export default Activities
