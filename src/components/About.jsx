import React from "react";
import { motion } from "motion/react";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <section id="about" className=" text-white p-6 md:p-12">
        <motion.div variants={textVariant()}>
          <h2 className="text-3xl font-bold text-white mb-4 md:text-[60px] sm:text-[50px] text-[30px]">
            ABOUT ME 
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-lg leading-relaxed"
        >
          I am driven and passionate about safeguarding people's security. I enjoy woeking with technology, analyzing and solving problems.
          Motivated, ready to learn and eager to launch a career in Cybersecurity Governance, Risk and Compliance (GRC). Well equipped with 
          foundational knowledge in risk management, regulatory standards and security framework such as NIST. Passionate about working in 
          building secure and compliants system while aligning cybersecurity initiative with business goals. Trained in analyzing risks,
          supporting compliance efforts, and contributing to a culture of security awareness. Seeking opportunities to grow and make an 
          impact in the evolving field of cybersecurity. 
            
        
          
      
        
        </motion.p>
      </section>
    </>
  );
};

export default About;
