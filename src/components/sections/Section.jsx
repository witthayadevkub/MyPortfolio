// Sections.js
import React from 'react';
import About from '../About/About';
import Skill from '../skill/Skill';
import Project from '../project/Project';

const Sections = () => {
  return (
    <div className=" pt-[3rem] grid gap-[5rem]">
      <div className="h-full  scroll-mt-[4rem] relative ">
        <About />
        <Skill />
      </div>

      <Project />

    </div>

  )
};

export default Sections;
