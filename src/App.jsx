import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './pages/Header'

function App() {

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
