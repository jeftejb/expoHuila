import { BrowserRouter as Router, Route, Routes,Navigate, BrowserRouter } from "react-router-dom"
import ExpoHuila from "./pages/espoHuila/ExpoHuila"
import Home from './pages/Home'
import Huila from "./pages/huila/Huila"
import Local from "./pages/local/local"
import Locais from "./pages/Locais/Locais"

const  App = ()=>{
  return (
          <Router>
           <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/huila" element={<Huila/>}/>
          <Route  path="/expo_huila" element={<ExpoHuila/>}/>
          <Route  path="/local" element={<Local/>}/>
          <Route  path="/locais" element={<Locais/>}/>
          </Routes>
          </Router>

    
  )
}

export default App
