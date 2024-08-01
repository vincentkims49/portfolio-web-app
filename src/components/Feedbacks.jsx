import React from "react";
import { motion } from "framer-motion";
import { link } from "../assets";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  source_article_link,
  image,
  tags,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    
    <div onClick={() => window.open(source_article_link, "_blank")}>
          <div onClick={() => window.open(source_article_link, "_blank")}
          className=' w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
            <p className='text-white font-black text-[48px]'>"</p>
            <img
                src={link}
                alt='source article'
                className='w-20 h-20 object-contain'
              />

          </div>

    </div>    
    

    <div onClick={() => window.open(source_article_link, "_blank")} className='mt-1'>
      
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
      <div className='mt-4 flex flex-wrap gap-2'>
        <p>Topics:</p><p>
        {
          
          tags.map((tag) => (
            
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >

              {tag.name}
            </p>
          ))
        }</p>

      </div>

      

      <div onClick={() => window.open(source_article_link, "_blank")} className='mt-7 flex justify-between items-center gap-1'>
        
        <div onClick={() => window.open(source_article_link, "_blank")} className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
          <p><span className='blue-text-gradient'>Peer Review Contributions by:</span></p>
          <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
          
        </div>

        {/* <img onClick={() => window.open(source_article_link, "_blank")}
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        /> */}
               
 
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Contributed Technical Articles</p>
          <h2 className={styles.sectionHeadText}>Articles.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
