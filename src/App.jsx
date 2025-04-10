import Navbar from './components/navbar/Navbar'
import './App.css'
import { AppContext } from './context'
import { useContext } from 'react'
import Cards from './components/card/cards'



function App() {

  const {theme} = useContext(AppContext)
  return (
    
    <div className={`appContainer ${theme}`}>
      <Navbar />
      <Cards />
    </div>
    
  )}


export default App
