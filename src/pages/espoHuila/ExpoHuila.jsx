import { BrowserRouter } from "react-router-dom"

import{About, Contact, Experience, Feedbacks, ProjectsExpo, Navbar, Tech, Works, StarsCanvas } from '../../components'
const  ExpoHuila = ()=>{
  return (
    <>
   
   <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
     <Navbar/>
   
    </div>
  
   
    <ProjectsExpo/>
   
    <div className="relative z-0">
     <Contact/>
     <StarsCanvas/>
    </div>
   </div>

    </>
  )
}

export default ExpoHuila
