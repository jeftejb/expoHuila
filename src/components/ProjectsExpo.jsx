
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { expo } from "../constants"
import{fadeIn, textVariant} from '../utils/motion'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.location.href = '/local'}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>Nome do expositor</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        
      </Tilt>
    </motion.div>
  );
};

const ProjectsExpo = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-20">
        <p className={`${styles.sectionSubText} `}>Expo Huila</p>
        <h2 className={`${styles.sectionHeadText}`}>Esteje por dentro de tudo que acontece nesta edicao da "EXPO HUILA - 2023"</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto corporis libero vero beatae voluptatem at cum dignissimos! Repudiandae, non voluptatum!
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {expo.map((project, index) =>   index < 6 &&(
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(ProjectsExpo, "")



