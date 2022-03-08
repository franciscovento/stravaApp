import { useNavigate } from 'react-router-dom'
import './sideBar.css'

const SideBar = ({ handleClick }) => {
  const navigate = useNavigate()
  


const handleHomeNavigate = () => {
    navigate('/')
    handleClick()
}

const handleNavigate =  () => {
  navigate('/monthly-stats')
    handleClick()
}

  return (
    <div className="SideBar">
        <nav className='SideBar__nav'>
        <ul>
          <li onClick={handleHomeNavigate}>
             Activities 
          </li>
          <li onClick={handleNavigate}>
            Monthly Stats
          </li>
        </ul>  
      </nav>
        <span className='SideBar__close' onClick={handleClick}>CLOSE</span>
    </div>
  )
}

export default SideBar
