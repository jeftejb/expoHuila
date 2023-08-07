import { BrowserRouter } from "react-router-dom"

import{ Contact, Provinces, Navbar, Poinst, StarsCanvas, MenuPoint } from '../../components'
const  Huila = ()=>{
  return (
    <>
   
   <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
     <Navbar/>
   
    </div>
   
   <Provinces/>

   <MenuPoint/>
    <Poinst/>
   
    <div className="relative z-0">
     <Contact/>
     <StarsCanvas/>
    </div>
   </div>

    </>
  )
}

export default Huila