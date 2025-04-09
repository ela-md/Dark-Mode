
import { useContext } from 'react';
import './Navbar.css'
import { MdOutlineDarkMode, MdLightMode  } from "react-icons/md";
import { AppContext } from '../../context';




function Navbar(){

    const {theme} = useContext(AppContext)

    return(
       <div className="navbar">
        <div className="icon">
            {theme =='dark' ? (<MdLightMode/>) : (<MdOutlineDarkMode/>)}
        </div>
       </div>
    )
}

export default Navbar