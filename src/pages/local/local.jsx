import { BrowserRouter } from "react-router-dom"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import{fadeIn, textVariant} from '../../utils/motion'
import{ Contact, Navbar, Poinst, StarsCanvas, MenuPoint } from '../../components'

const ProjectCard = () => {
    return (
      <motion.div variants={fadeIn("up", "spring")} className="mt-20  ">
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[1024px] w-full'
        >
          <div className='relative w-full  sm:h-[520px] h-[320px]'>
            <img
              src={"img/WhatsApp Image 2023-08-07 at 11.32.50.jpeg"}
              alt='project_image'
              className='w-full h-full bg-no-repeat rounded-2xl'
            />
  
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open("", "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={""}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>
  
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{"Huila - Banja"}</h3>
            <p className='mt-2 text-secondary text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio provident distinctio nostrum officia modi vero excepturi perferendis aspernatur quidem accusamus.</p>
          </div>
  
        </Tilt>
      </motion.div>
    );
  };
  
const  Local = ()=>{
  return (
    <>
   
   <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
     <Navbar/>
   
    </div>
   
 
    <div className='mt-20 flex flex-wrap gap-7 justify-center text-center '>
       
          <ProjectCard />
      </div>
 
 
   
    <div className="relative z-0">
     <Contact/>
     <StarsCanvas/>
    </div>
   </div>

    </>
  )
}

export default Local