import { BrowserRouter } from "react-router-dom"

import{ Contact, Navbar, Poinst, StarsCanvas, MenuPoint } from '../../components'
const  Locais = ()=>{
  return (
    <>
   
   <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
     <Navbar/>
   
    </div>
   
 

 
    <Poinst/>
   
    <div className="relative z-0">
     <Contact/>
     <StarsCanvas/>
    </div>
   </div>

    </>
  )
}

export default Locais