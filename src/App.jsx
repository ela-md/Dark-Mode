import Navbar from './components/navbar/Navbar'
import './App.css'
import { AppContext } from './context'
import { useContext } from 'react'



function App() {

  const {theme} = useContext(AppContext)
  return (
    
    <div className={`appContainer ${theme}`}>
      <Navbar />
    </div>
    
  )}


export default App
