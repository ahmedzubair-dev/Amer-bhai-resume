import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { amer, bwmap, worldmap } from '../assets';
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
        fontSize: '2.2em',
        fontWeight: 'bold',
        width: 'auto',
        minHeight: '58px'
      }}
      className="bg-[linear-gradient(to_right,#000000,#808080,#808080)] text-transparent bg-clip-text font-mova font-bold uppercase"
    >
      {currentText}
    </span>
  );
};



// Hero Component
const Hero = () => {
  return (
    <>
      
      <div className="absolute top-0 left-0 z-0 h-[100vh]  w-screen  overflow-x-hidden" >
      <img
  src={bwmap}
  alt="world map"
  className="w-full h-full object-cover overflow-hidden"
/>
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-full">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full  overflow-hidden"
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

            {/* socail link */}
           <div className='sociallinks' style={{
                display: 'flex', 
                gap: '20px'
            }}>
  <a href='' target="_blank">
  <svg 
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 social-icon"
            fill="currentColor"
            style={{ 
                color: "#000", 
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                borderRadius: "10px",
                border: "3px solid rgb(12, 12, 12)",
                padding: "4px",
              
                boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.2)",
                 height:"40px",
                width:"40px"
                
            }}
            viewBox="0 0 24 24"
            onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.2)";
                e.currentTarget.style.boxShadow = "4px 6px 15px rgba(3, 3, 3, 0.6)";
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "2px 4px 10px rgba(0, 0, 0, 0.2)";
            }}
        >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
  </a>
   

    <a href="https://www.linkedin.com/in/amer-khan-790b70143/" target="_blank" style={{ textDecoration: 'none' }}>
        {/* Linkedin */}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 social-icon"
            fill="currentColor"
            style={{ 
                color: "#0077b5", 
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                borderRadius: "12px",
                padding: "8px",
                
                boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.2)",
                border: "4px solid #0077b5",
                height:"40px",
                width:"40px"
            }}
            viewBox="0 0 24 24"
            onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.2)";
                e.currentTarget.style.boxShadow = "4px 6px 15px rgba(0, 119, 181, 0.6)";
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "2px 4px 10px rgba(0, 0, 0, 0.2)";
            }}
        >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
    </a>

    <a href="https://www.instagram.com/amerkhan503/" target="_blank" style={{ textDecoration: 'none' }}>
        {/* Instagram */}
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 social-icon"
            fill="currentColor"
            style={{ 
                color: "#c13584", 
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                borderRadius: "10px",
                // padding: "8px",
              
                boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.2)",
                 height:"40px",
                width:"40px"
                
            }}
            viewBox="0 0 24 24"
            onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.2)";
                e.currentTarget.style.boxShadow = "4px 6px 15px rgba(193, 53, 132, 0.6)";
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "2px 4px 10px rgba(0, 0, 0, 0.2)";
            }}
        >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    </a>

          </div>  

          </div>

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
  className="absolute bottom-0 right-0 sm:h-[90vh] md:h-[70vh] xl:h-[80vh] mx-auto"
  src={amer} 
  alt="profile"
/>

        </div>
      </section>
    </>
  );
};

export default Hero;