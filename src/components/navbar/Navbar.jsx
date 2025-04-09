
import { useContext } from 'react';
import './Navbar.css'
import { MdOutlineDarkMode, MdLightMode  } from "react-icons/md";
import { AppContext } from '../../context';




function Navbar(){

    const {theme, setTheme} = useContext(AppContext)

    const toggleTheme = () => {
     if(theme == 'light') {
        setTheme('dark')
     }else{
        setTheme('light')
     }
    }

    return(
       <div className={`navbar ${theme}`}>
        <div className="icon" onClick={toggleTheme}>
            {theme =='dark' ? (<MdLightMode/>) : (<MdOutlineDarkMode/>)}
        </div>
       </div>
    )
}

export default Navbar