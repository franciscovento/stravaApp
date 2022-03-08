import './header.css'
import stravaLogo from '../../assets/stravaLogo.png'
import imgProfile from '../../assets/man.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SideBar from '../sideBar/SideBar'
import { useState } from 'react'




const Header = () => {

const  { userinfo }  = useSelector( state => state.userReducer)
const [ open, setOpen ] = useState(false)


const handleClick = () =>{
  setOpen(prev => !prev)
}

  return (
    <header>
     <div className='mainHeader'>
     <div className="mainHeader__logo">
        <img src={stravaLogo} alt="" />  
      </div>
      <nav className='mainHeader__nav'>
        <ul>
          <li>
            <Link to= '/'> Activities </Link>
          </li>
          <li>
            <Link to='monthly-stats'>Monthly Stats</Link>
          </li>
        </ul>  
      </nav>
      <div onClick={handleClick} className="mainHeader__profileImg">
        <img src={imgProfile} alt="" />
      </div>
     </div>
     <div className='headerBottom'>
        <h2 className="headerBottom__name">{userinfo && userinfo.username}</h2>
        <p>{userinfo && userinfo.city}</p>
     </div>
     { open ? <SideBar handleClick={handleClick}/> : ""}
    </header>
  )
}

export default Header
