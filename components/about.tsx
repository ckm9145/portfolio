"use client";
import React, {useEffect} from 'react'
import SectionHeading from "./section-heading";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';

export default function About() {

  const {ref} = useSectionInView('About');
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{opacity:0 ,y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay: 0.175}}
        id="about"
        ref={ref}
        >
        <SectionHeading> About me </SectionHeading>
        <p className="mb-3">
            I am currently in the process of obtaining my Bachelor&apos;s and Master&apos;s Degree in{" "}
            <span className="font-medium">Computer Science</span> at{" "}
            <span className='font-medium'>Northwestern University</span>. I am also a member of the Varsity Men&apos;s Swim and Dive Team. This past summer I competed for Team USA at the World University games in Chengdu, China. 
              My current{" "}
            interests lie in the interesection of{" "}
            <span className='font-medium'>Machine Learning and Full Stack Software Engineering.</span> {" "}
            <span className='font-medium'>
             I&apos;ve cultivated a strong fascination with database systems, acknowledging their critical importance across both domains.</span>{" "}
             I utilize{" "}
            <span className='font-medium'>Python and C++</span> as my main coding{" "}
            languages while having some experience using ML frameworks such as{" "}
            <span className='font-medium'>PyTorch, TensorFlow, Sklearn.</span>
        </p>

        <p>
            <span className="italic">When I&apos;m not coding</span>, I enjoy 
            fishing, watching movies, and hiking. I also enjoy{" "}
            <span className="font-medium">learning new things</span>. I am currently
            passionate about Formula 1 Racing and English Premier League Football.  {" "}
            <span className="font-medium">My goal is to become fluent in Japanese!</span>
      </p>
    </motion.section>
  )
}