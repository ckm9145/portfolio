"use client";
import { projectsData } from '@/lib/data'
import React, {useEffect} from 'react'
import SectionHeading from './section-heading'
import Project from "./work";
import { useActiveSectionContext } from '@/context/active-section-context';
import {useInView} from "react-intersection-observer";
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const {ref} = useSectionInView('Projects', 0.5);
  return (
    <section id="works" className='scroll-mt-28 mb-28' ref={ref}>
        <SectionHeading>My Works</SectionHeading>
        <div>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project}/>
                </React.Fragment>
                
            ))}
        </div>
    </section>
  )
}