import React from 'react'
import { Tilt } from "react-tilt"
import { motion } from 'framer-motion'
import {styles} from '../styles'
import { servicesMenu } from '../constants'
import{fadeIn, textVariant} from './../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceVard = ({index, title, icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      onClick={() => window.open('/locais', "_blank")}
      >
<div options ={{
  max:45,
  scale:1,
  apeed:450
}}
className='bg-tertiery rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center flex-col'
>

  <img src={icon} alt={title} className='w-16 h-16 object-contain ' />
  <h3 className='text-white text-[20px] font-bold text-center' >{title}</h3>
</div>
      </motion.div>

    </Tilt>
  )
}

const MenuPoint = () => {
  return (
    <>
    <motion.div variants={textVariant()} className='text-center justify-center' >
      <p className={styles.sectionSubText} >Introducao</p>
      <h2 className={styles.sectionHeadText} >O que Procuras ?</h2>
    </motion.div>

    <motion.p 
    variants={fadeIn("","", 0.1, 1)}
    className='mt-4 text-secondary text-[17px]  leading-[30px] text-center justify-center '
    >
      Conheca o potencial do nosso pais, os principais pontos turisticos das nossas provincias.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'> 
       {servicesMenu.map((service, index)=>(
        <ServiceVard key={service.title} index = {index} {...service}/>
       ))}

    </div>
    </>
  )
}

export default  SectionWrapper(MenuPoint, "about") 