import { useState, useRef, useEffect } from 'react'
// img
import '../../App.css'
import img from "../../assets/cute-dev-tiger.jpg"
import js from "../../assets/javascript-logo-1 (1).png"
import react from "../../assets/react icon.png"
import html from "../../assets/logo-html.png"
import css from "../../assets/logo-css.png"
import tailwind from "../../assets/tailwind-logo.png"
import resume from "../../assets/witthaya_resume.pdf"
import { useModeContext } from '../../main'
//icon
import { FaLocationArrow } from "react-icons/fa";
import { TypingAnimation2 } from '../TypingAnimation';
import { MdOutlineEmail } from "react-icons/md";
import { LuExternalLink } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { ImGit } from "react-icons/im";
import { FaNodeJs } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { DiCss3Full } from "react-icons/di";
import { DiNpm } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiAngularSimple } from "react-icons/di";

const Sidebar = () => {
    const { darkMode, setDarkMode } = useModeContext()
    const mode = darkMode ? "dark" : "light"
    const text = darkMode ? "light" : "dark"

    const [isAnimating, setIsAnimating] = useState(false);
    const startAnimation = () => {
        setIsAnimating(true);
    };

    const stopAnimation = () => {
        setIsAnimating(false);
    };

    const handleCopyText = () => {
        const textToCopy = "witthayafaengsap02@gmail.com";
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                console.log('Text copied to clipboard');
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
                document.execCommand('copy');
                console.log('Text copied to clipboard using document.execCommand');
            });
    };

    const base = `rounded-md  ${darkMode ? "shadow" : "shadow-xl bg-gradient-to-b from-sky-500 to-white"} place-content-center glass flex justify-center items-center p-3 hover:translate-y-[-0.2rem] ease-out duration-300`
    const sameHTML = () => {
        return <div className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent ${darkMode ? "to-white " : "to-pink-400"} opacity-40 group-hover:animate-shine`} />
    }


    return (
        <div className={`relative bg-${mode} flex  pt-[3rem] flex-col justify-between h-fit lg:h-screen w-full lg:sticky top-0 `}>
            <div className="flex  lg:block z-40">
                <div className="w-full  px-5">
                    <p className={`font-bold text-nowrap text-3xl text-colorbase drop-shadow-[#ffffff] z-20`}>Witthaya Faengsap</p>
                    <p className={`my-5 z-20`}><TypingAnimation2 /></p>
                    {/* <a href={resume}><button class="z-20 flex items-center gap-1 p-2 mt-5 rounded text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-pink-500 hover:to-yellow-500">View Resume <LuExternalLink /></button></a> */}
                    <a href={resume} target='_blank'><button class="z-20 flex items-center gap-1 p-2 mt-5 rounded text-white bg-colorbase hover:bg-hoverbase">View Resume <LuExternalLink /></button></a>
                    <FaLocationArrow className={`animate-bounce size-4 z-20`} />

                    <div className="md:absolute bottom-10 left-3">
                        <div className=" flex justify-start gap-8 font-bold  ">
                            <a href="https://www.linkedin.com/in/witthaya-faengsap-04437b2b4/" target='_blank'><AiOutlineLinkedin className='text-xl hover:scale-125 ease-out duration-300 hover:text-colorbase' /></a>
                            <a href="https://github.com/witthayadevkub" target='_blank'><FaGithub className='text-xl hover:scale-125 ease-out duration-300 hover:text-colorbase' /></a>
                            <div className="tooltip" data-tip="Click to coppy my Email">
                                <TfiEmail onClick={handleCopyText} className=' hover:text-colorbase text-xl hover:scale-125 ease-out duration-300 ' />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="  hidden sm:flex  md:px-10 justify-center lg:justify-start ease-out duration-300 py-12 w-full "
                    onMouseOver={startAnimation}
                    onMouseOut={stopAnimation}>
                    <div className="relative  hover:skew-y-6  ease-out duration-300">
                        <div className="paint overflow-hidden size-40 relative ">
                            <img src={img} alt="phototiger" className="object-cover box" />
                        </div>
                        <img src={js} alt="js" className={`size-10 object-cover absolute  z-30 right-[-1.5rem] top-0 
                    ${isAnimating ? 'right-[-2rem] skew-y-12 bg-yellow-500 shadow-md shadow-yellow-500/50 animate-pulse' : ''} ease-out duration-300`} />

                        <img src={react} alt="react" className={`size-12 object-cover absolute  z-30 left-[-2rem] bottom-5 
                    ${isAnimating ? 'left-[-3rem] skew-y-12 animate-pulse' : ''} ease-out duration-300`} />

                        <img src={html} alt="html" className={`size-11 object-cover absolute  z-30 right-5 bottom-[-3rem] 
                    ${isAnimating ? 'right-[-2rem] skew-y-6 translate-y-[-1rem] ' : ''} ease-out duration-300`} />

                        <img src={css} alt="css" className={`size-11 object-cover absolute   right-[5rem] bottom-[-3rem] 
                     ${isAnimating ? 'right-[-3.5rem] skew-y-6 translate-y-[-2rem]' : ''} ease-out duration-300`} />

                        {isAnimating && <div className='absolute font-bold text-xl bottom-[-2rem] flex textanimate z-30'>
                            <span className="text-blue-400 flex">Print <span className='text-yellow-400'> ( <span className="text-[#6dbe74]">"Hello"</span> )</span></span> </div>}

                    </div>
                </div>


            </div>


            <div className={`hidden absolute top-0  lg:grid gap-2 grid-cols-5 grid-rows-14 mt-15  opacity-20 w-full h-full  `}>

                <div className={`${base} group relative  overflow-hidden  row-span-2 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>
                <div className={`${base} group relative  overflow-hidden  row-span-3 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>
                <div className={`${base} group relative  overflow-hidden  row-span-2 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>
                <div className={`${base} group relative  overflow-hidden  row-span-1 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>
                <div className={`${base} group relative  overflow-hidden  row-span-2 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>

                <div className={`${base} group relative  overflow-hidden  row-span-2 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>
                <div className={`${base} group relative  overflow-hidden  row-span-1 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>
                <div className={`${base} group relative  overflow-hidden  row-span-2 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>
                <div className={`${base} group relative  overflow-hidden  row-span-3 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>
                <div className={`${base} group relative  overflow-hidden  row-span-2 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>

                <div className={`${base} group relative  overflow-hidden  row-span-2 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>
                <div className={`${base} group relative  overflow-hidden  row-span-3 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>
                <div className={`${base} group relative  overflow-hidden  row-span-2 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>
                <div className={`${base} group relative  overflow-hidden  row-span-3 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>
                <div className={`${base} group relative  overflow-hidden  row-span-2 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>

                <div className={`${base} group relative  overflow-hidden  row-span-2 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>
                <div className={`${base} group relative  overflow-hidden  row-span-3 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>
                <div className={`${base} group relative  overflow-hidden  row-span-2 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>
                <div className={`${base} group relative  overflow-hidden  row-span-3 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>
                <div className={`${base} group relative  overflow-hidden  row-span-2 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>

                <div className={`${base} group relative  overflow-hidden  row-span-1 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>
                <div className={`${base} group relative  overflow-hidden  row-span-3 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>
                <div className={`${base} group relative  overflow-hidden  row-span-1 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>
                <div className={`${base} group relative  overflow-hidden  row-span-3 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>
                <div className={`${base} group relative  overflow-hidden  row-span-2 skew-y-6 rounded-tl-none`}>{sameHTML()}</div>

            </div>






        </div>
    )
}

export default Sidebar