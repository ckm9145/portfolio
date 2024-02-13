import {useInView} from "react-intersection-observer";
import {useActiveSectionContext} from "@/context/active-section-context";
import {useEffect} from "react";
import { SectionName } from "./types";

type useSectionInViewProps = {
    sectionName: SectionName;
};
export function useSectionInView(sectionName: SectionName, threshold=0.75){
    const {ref, inView} = useInView({
        threshold,
      });
      const {activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick} = useActiveSectionContext();
      
      useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000){
          setActiveSection(sectionName);
        }
      }, [inView, setActiveSection, timeOfLastClick, sectionName, threshold]);

    return {
        ref, inView
    };
}