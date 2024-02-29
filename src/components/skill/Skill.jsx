import React, { useState, useEffect } from 'react'
//icons
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
//
import img from "../../assets/cute-dev-tiger.jpg"
import js from "../../assets/javascript-logo-1 (1).png"
import react from "../../assets/react icon.png"
import html from "../../assets/logo-html.png"
import css from "../../assets/logo-css.png"
import tailwind from "../../assets/tailwind-logo.png"
import skill from "../../assets/skill.jpg"
import codeSkill from "../../assets/codeSkill1.png"
import { useModeContext } from '../../main';

import { TypingAnimation } from '../TypingAnimation';

const Skill = () => {
    const { darkMode, setDarkMode } = useModeContext()
    const [openCode, setOpenCode] = useState(false)
    const [mouse, setMouse] = useState()
    const [isAnimating, setIsAnimating] = useState({});
    const [input, setInput] = useState('')

    const startAnimation = (id) => {
        setIsAnimating({ [id]: true });
    };

    const stopAnimation = (id) => {
        setIsAnimating({ [id]: false });
    };

    useEffect(() => {
        setTimeout(() => {
            setOpenCode(true)
        }, 1500)
    }, [])

    const skills = [
        { name: "React.js", icon: <FaReact />, img: react },
        { name: "Javascript", icon: <RiJavascriptFill />, img: js },
        { name: "Html", icon: <IoLogoHtml5 />, img: html, },
        { name: "Css", icon: <BiLogoCss3 />, img: css },
        { name: "Tailwind", icon: <TbBrandTailwind />, img: tailwind, },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <FaNodeJs /> },
        { name: "Golang", icon: <FaGolang />, },
        { name: "{REST API}", icon: <TbApi />, },
        { name: "Mongodb", icon: <SiMongodb />, },
        { name: 'Git', icon: <ImGit /> }

    ]

    // &#123; = {
    // &#125; = }
    // console.log(input)

    return (
        <div className='pt-10 sm:pt-[4rem] h-fit w-full lg:flex mb-10 z-40'
            onMouseOver={() => setMouse(true)}
            onMouseOut={() => setMouse(false)}>

            <div className=" overflow-hidden size-40 relative h-full w-full flex-1">
                <p className='text-md md:text-md font-semibold flex items-center gap-2 mb-2 cursor-pointer' onClick={() => setOpenCode(!openCode)} >Skill<RiCodeSSlashFill /></p>
                {/* {!darkMode && <img src={codeSkill} alt="phototiger" className=" object-cover box z-5 rounded-lg" />} */}

                <p className='text-gray-300 '>// code</p>
                {openCode && <>
                    <div className={`font-semi codeAnimate p-2 rounded-lg ${!darkMode ? "bg-slate-800" : ""} text-sm sm:text-md`}>
                        <span className="text-violet-400 mr-2">function</span>
                        <span className="text-blue-400 ">handleSkill</span>
                        <span className='text-pink-400 '> (<span className='text-yellow-400 hover:skew-x-12'> skill</span>)</span>
                        <span className="text-pink-400 "> &#123;</span><br />
                        <pre className="text-blue-400 flex "><pre className="text-pink-400">     if</pre> (<span className="text-pink-400"> ! <span className="text-gray-300">skill </span></span>)
                            <pre> &#123;</pre> </pre>
                        <span>                    <pre className='text-pink-400'>         return <span className='text-gray-300'>console<span className='font-bold'>.</span> <span className="text-blue-400">log
                            <span className='text-yellow-400 '>(<span className="text-[#6dbe74] ">"Don't Stop Learning"</span>)</span></span></span></pre></span>
                        <pre className='text-blue-400'>     &#125; </pre>
                        <pre className='text-blue-400'>     <span className="text-pink-400">return <span className='text-gray-300'>console<span className='font-bold'>.</span> <span className="text-blue-400">log
                            <span className='text-blue-400'>(<span className="text-[#6dbe74]">"Improving"</span>)</span></span></span></span> <br />   &#125;
                            <br /><br /></pre>

                        <div className="text-pink-400 flex"><span className="text-blue-400">handleSkill </span>
                            ( <div className="flex text-[#6dbe74]">"<TypingAnimation />"</div> )</div>
                    </div>
                </>}

            </div>


            <div className="flex md:hidden pt-5 z-20">

                <div className="grid grid-cols-2 sm:grid-cols-3 w-full ">

                    {skills.map((skill, i) => (
                        <div key={i} className={`${isAnimating[i] ? 'translate-x-5  border-l-4 border-colorbase' : ''} flex items-center text-md p-2 gap-2 font-bold }`}
                            onMouseOver={() => startAnimation(i)}
                            onMouseOut={() => stopAnimation(i)}>

                            <div className="">
                                {isAnimating[i] ? <>{skill.img ? <img src={skill.img} alt="img"
                                    className={`size-6 object-cover  z-10 ease-out duration-300 textanimate`} />
                                    : <div className={`textanimate flex justify-center items-center text-xs sm:text-sm  ${skill.name == "Golang"?"text-xl justify-start":""}`} >
                                        {skill.icon}
                                    </div>}</>
                                    : <div className={`size-8 border overflow-hidden rounded-lg flex justify-center items-center text-hoverbase text-md md:text-lg ${skill.name == "Golang"?"text-xl justify-start":""}`}>{skill.icon}</div>}
                            </div>
                            <p className={`${isAnimating[i] ? "textanimate drop-shadow-lg text-colorbase" : ''}}`}>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Skill