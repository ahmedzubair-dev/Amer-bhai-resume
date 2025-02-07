import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { shaq, bwmap, worldmap } from '../assets';
import React, { useState, useEffect } from 'react';

// Typing Animation Logic
const TypingText = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;
    let step = isDeleting ? -1 : 1;

    if (currentIndex < texts.length) {
      timeoutId = setTimeout(() => {
        // Update the current text character by character
        setCurrentText((prevText) =>
          texts[currentIndex].substring(0, prevText.length + step)
        );

        // Switch to deletion mode after reaching the end of the text
        if (!isDeleting && currentText === texts[currentIndex]) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }

        // Switch to typing mode after deleting all characters
        if (isDeleting && currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }, 80); // Speed of typing effect
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <span
      style={{
        display: 'block',
        marginTop: '1rem',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        width: 'auto'
      }}
      className="text-eerieBlack font-mova font-bold uppercase"
    >
      {currentText}
    </span>
  );
};

// Hero Component
const Hero = () => {
  return (
    <>
      {/* Background Image */}
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>

      {/* Hero Section */}
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`absolute inset-0 sm:top-[150px] top-[100px] 
          ${styles.paddingX} max-w-7xl mx-auto flex flex-col items-start 
          justify-start gap-3`}
        >
          {/* Content Aligned to the Left */}
          <div className="max-w-md">
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
            >
              Hi, I'm{' '}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase"
              >
                Amer Khan
              </span>
            </h1>
            {/* Typing Animation Below Name */}
            <TypingText
              texts={[
                'Web Developer',
                'IT Support Engineer',
                'Software Engineer',
              ]}
            />
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
            I am a versatile IT Support Engineer {' '}
              <br className="sm:block hidden" />
              consectetur adipisicing elit deleniti, voluptas.
            </p>
          </div>

          {/* Scroll Indicator */}
          <div
            className="absolute xs:bottom-10 bottom-32 w-full 
            flex justify-center items-center"
          >
            <a href="#about">
              <div
                className="w-[35px] h-[64px] rounded-3xl border-4 
                border-french border-dim flex
                justify-center items-start p-2"
              >
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                  className="w-3 h-3 rounded-full bg-taupe mb-1"
                />
              </div>
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div>
          <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[70vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[70vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            src="/Main.png" 
            alt="profile"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;