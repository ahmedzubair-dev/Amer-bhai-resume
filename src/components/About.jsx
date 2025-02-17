import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
        
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div 

    className="-mt-[6rem] ">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className="text-white-500 text-[62px] font-bold">About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[28px] max-w-3xl leading-[30px]">
          Dedicated and adaptable professional with a strong background in international customer
          service. Self-motivated and adept at making crucial decisions, collaborating with peers to drive
          success, and overcoming obstacles. Committed to delivering innovative solutions that elevates
          organization goals. 
      </motion.p>
      <h2 className='text-white-300 font-black mt-5 mb-0 md:text-[30px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins'>Certifications</h2>


      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} 
          
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
