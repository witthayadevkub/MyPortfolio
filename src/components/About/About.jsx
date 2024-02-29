import React, { useState, useEffect } from 'react'
import '../../App.css'
import img from "../../assets/cute-dev-tiger.jpg"
import js from "../../assets/javascript-logo-1 (1).png"
import react from "../../assets/react icon.png"
import html from "../../assets/logo-html.png"
import css from "../../assets/logo-css.png"
import tailwind from "../../assets/tailwind-logo.png"

import { FaReact } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { BiLogoCss3 } from "react-icons/bi";
import { IoLogoHtml5 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { ImGit } from "react-icons/im";
import { FaNodeJs } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { useModeContext } from '../../main'
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { DiCss3Full } from "react-icons/di";
import { DiNpm } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiAngularSimple } from "react-icons/di";

const About = () => {
  const [mouse, setMouse] = useState()
  const { darkMode, setDarkMode } = useModeContext()
  const base =`rounded-md  ${darkMode ? "shadow" : "shadow-xl"} place-content-center glass flex justify-center items-center p-3 hover:translate-y-[-0.2rem] ease-out duration-300`
  // const base = 'rounded-md shadow place-content-center glass flex justify-center items-center p-3 hover:bg-gradient-to-t  hover:from-pink-500 hover:to-white'
  const sameHTML = () => {
    return <div className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent ${darkMode ? "to-white " : "to-pink-400"} opacity-40 group-hover:animate-shine`} />
  }
  return (
    <div id="about" className="scroll-mt-80 ">
      <p className='text-lg'>About</p>
      <p className='text-gray-500 text-md z-20 font-semibold'>Embrace challenges and failures
        embrace challenges as opportunities for growth. Programming inherently involves solving complex problems, and setbacks are
        inevitable. Instead of being discouraged by failures, view them as learning experiences. Analyze what went wrong, iterate on your approach, and strive for improvement.</p>

      <div className="p-2 w-full bg-gradient-to-r opacity-30 fixed top-10 lg:static z-0 " onMouseOver={() => setMouse(true)} onMouseOut={() => setMouse(false)}>

        <div className={`grid gap-2 grid-cols-8 grid-rows-5 mt-10 ease-out duration-300 textanimate h-[200px] `}>

          <div className={`${base} group relative  overflow-hidden col-start-2 row-span-2  skew-y-6 rounded-tl-none`}>
            <FaReact className='text-3xl'/>
            {sameHTML()}
          </div>

          <div className={`${base} group relative  overflow-hidden col-start-4 `}>
            <DiSass className='text-3xl' />
            {sameHTML()}
          </div>

          <div className={`${base} group relative  overflow-hidden col-start-3  row-span-2 grid `}>
            {sameHTML()}
            <IoLogoHtml5 className='text-3xl' />
          </div>

          <div className={`${base} group relative  overflow-hidden col-start-1 col-span-2  `}>
            <DiNpm className='text-3xl' />
            {sameHTML()}
          </div>

          <div className={`${base} group relative   overflow-hidden col-start-4 row-span-3   `}>
            <ImGit className='text-3xl' />
            {sameHTML()}
          </div>

          <div className={`${base} group relative  overflow-hidden col-start-6 row-start-3 row-span-2 `}>
            <FaNodeJs className='text-3xl' />
            {sameHTML()}
          </div>

          <div className={`${base} group relative  overflow-hidden col-start-6 row-start-2 row-span-1`}>
            <DiAngularSimple className='text-3xl' />
            {sameHTML()}
          </div>

          <div className={`${base} group relative  overflow-hidden row-start-2 `}>
            <FaGolang className='text-3xl' />
            {sameHTML()}
          </div>

          <div className={`${base} group relative  overflow-hidden col-start-2 row-span-2 `}>
            <RiJavascriptFill className='text-3xl' />
            {sameHTML()}
          </div>

          <div className={`${base} group relative  overflow-hidden row-span-1`}>
            <TbBrandTailwind className='text-3xl' />
            {sameHTML()}
          </div>

          <div className={`${base} group relative  overflow-hidden col-start-5 row-start-1 row-span-2 `}>
            <DiCss3Full className='text-3xl' />
            {sameHTML()}
          </div>

          <div className={`${base} group relative  overflow-hidden  row-span-2 skew-y-6 rounded-tl-none`}>
            <TbApi className='text-3xl' />
            {sameHTML()}
          </div>

          <div className={`${base} group relative  row-start-2 col-start-7 row-span-2 overflow-hidden skew-y-6 rounded-tl-none`}>
            <SiMongodb className='text-3xl' />
            {sameHTML()}
          </div>

          <div className={`${base} group relative row-start-4 col-start-7 col-span-2 overflow-hidden`}>
            <FaPython className='text-3xl' />
            {sameHTML()}
          </div>

          <div className={`${base} group relative row-start-5 col-start-7  overflow-hidden rounded-bb-lg `}>
            <FaJava className='text-3xl' />
            {sameHTML()}
          </div>
        </div>
      </div>

    </div>
  )
}

export default About