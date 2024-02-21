import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "./styles";
import { plans } from "../constant/index";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../util/motion";
import Link from "next/link";

const ServiceCard = ({ index, title, percentage, link}) => (
  <Tilt className='xs:w-[250px] w-full '>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-4 min-h-[280px] flex justify-evenly items-center flex-col'
      >

       

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
          
        </h3>
        <p>{percentage}</p>

        <button className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"><Link href={link}>signup</Link></button>


      </div>
    </motion.div>
  </Tilt>
);

const Plan = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
       
        <h2 className={styles.sectionHeadText}>BITNEX FX</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      PLANS
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {plans.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
          
        ))}
        
      </div>
    </>
  );
};

export default SectionWrapper(Plan, "plans");
