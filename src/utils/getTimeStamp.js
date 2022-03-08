export const getTimeStamp = (numberOfMonths = 1) => {
  const pastDate = new Date()
  pastDate.setMonth(pastDate.getMonth() - numberOfMonths)
  const fecha = pastDate.toString()
  const fechatimestamp = Date.parse(fecha)
  return fechatimestamp / 1000
}


// export const getLastThreeMonth = (listActivities) => {


//   const lastMonth = listActivities.map( x => {

//     let yearActivitie = new Date(x.start_date).getFullYear();
//     let month = new Date(x.start_date).getMonth();

//     let currentYear = new Date().getFullYear()
//     let monthToCompare = new Date()

//     monthToCompare.setMonth(monthToCompare.getMonth() - 2);
//     monthToCompare = monthToCompare.getMonth()

//     if ( yearActivitie === currentYear ){
//       if( month >= monthToCompare){
//         return x;
//       }
//     } else{
//       return undefined
//     }
//   }).filter(y => y !== undefined)

//   return lastMonth;
// }


export const getDataForMonth = (data) => {
  let twoPastMonth = [];
  let pastMonth = [];
  let currentMonth = [];
  
	const fecha = new Date()
  
  data.forEach( item => {
    if (new Date(item.start_date).getMonth() === fecha.getMonth()){
      currentMonth.push(item)
    }
    if (new Date(item.start_date).getMonth() === fecha.getMonth() - 1){
      pastMonth.push(item)
    }
    if (new Date(item.start_date).getMonth() === fecha.getMonth() - 2){
      twoPastMonth.push(item)
    }
  })
  
  twoPastMonth = twoPastMonth.reduce( (acc, curr) => {
    return {
      distance: acc.distance + curr.distance,
      time: acc.moving_time + curr.moving_time,
      elevation_gain: acc.total_elevation_gain + 	curr.total_elevation_gain
    }
  })
  
    pastMonth = pastMonth.reduce( (acc, curr) => {
    return {
      distance: acc.distance + curr.distance,
      time: acc.moving_time + curr.moving_time,
      elevation_gain: acc.total_elevation_gain + 	curr.total_elevation_gain
    }
  })
  
  currentMonth = currentMonth.reduce( (acc, curr) => {
    return {
      distance: acc.distance + curr.distance,
      time: acc.moving_time + curr.moving_time,
      elevation_gain: acc.total_elevation_gain + 	curr.total_elevation_gain
    }
  })
  
  
  return {
    twoPastMonth,
    pastMonth,
    currentMonth
  }
}


export const getMonthNames = () => {
  const currentDate = new Date();
  const pastDate = new Date();
  pastDate.setMonth(pastDate.getMonth() - 1)
  
  const twoPastDate = new Date();
  twoPastDate.setMonth(twoPastDate.getMonth() - 2)
  
  return {
    currentDate: currentDate.toLocaleString('default', { month: 'long' }),
    pastDate: pastDate.toLocaleString('default', { month: 'long' }),
    twoPastDate: twoPastDate.toLocaleString('default', { month: 'long' })
  }
}