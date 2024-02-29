import React, { useState } from 'react'
//img projects
// import img from "../../assets/cute-dev-tiger.jpg"

//icons
import { RiLink } from "react-icons/ri";
import { LuExternalLink } from "react-icons/lu";
import { useModeContext } from '../../main'
import { FaGithub } from "react-icons/fa";
//arrays
import { projects } from './ArrayProject'
const Project = () => {
    const { darkMode, setDarkMode } = useModeContext()


    const [isAnimating, setIsAnimating] = useState({});
    const startAnimation = (i) => {
        setIsAnimating({ [i]: true });
    };

    const stopAnimation = (i) => {
        setIsAnimating({ [i]: false });
    };

    return (
        <div id="project" className='h-full scroll-mt-10 textanimate z-40 font-semibold '>
            <p className="text-lg">-Project</p>
            {projects.map((project, index) => (
                <div key={index} className={`py-8 px-2 grid gap-5 grid-cols-[30%_1fr] rounded-lg ${darkMode ? 'bg-black' : 'bg-white'}  h-fit  ${isAnimating[index] ? `translate-x-5 ease-out duration-300  ${darkMode ? 'bg-[#222121] ' : ''}` : ""}`}
                    onMouseOver={() => startAnimation(index)}
                    onMouseOut={() => stopAnimation(index)}>

                    <div className="flex flex-col gap-2">
                        <p className={`text-md text-gray-500 ${isAnimating[index] ? "text-colorbase" : ""}`}>{project.time}</p>
                        {project.img && <img src={project.img} alt="" className='rounded-lg object-cover object-left-top h-[150px] w-full' />}    
                    </div>

                    <div className="flex flex-col justify-between  ">

                        <div className="flex flex-col justify-between p-3 gap-2">
                            <p className={`font-bold text-md  ${isAnimating[index] ? "text-colorbase " : ""}`}>{project.title}</p>

                            {project.link && <button className='text-sm flex items-center gap-1 btn-link text-colorbase'><a href={project.link} target="_blank">Check out the live demo here</a><LuExternalLink /> </button>}

                            {project.github && 
                            <div className="flex gap-2">
                                 {project.github.map((link, i) => (
                                <a href={link} key={i} target='_blank'><FaGithub className='text-md hover:scale-125 ease-out duration-300 hover:text-colorbase'/></a>
                            ))}
                            </div>}
                            
                            <p className='text-md text-gray-500'>{project.keywords}</p>
                            <div className="text-md text-gray-500">{project.details}</div>
                        </div>

                        <div className="flex flex-wrap gap-3 w-4/5 text-sm">
                            {project.use.map((skill, i) => (
                                <div key={i} className={`p-1 rounded  bg-slate-800 ${darkMode ? "" : "text-white"} ${isAnimating[index] ? "text-colorbase " : "text-gray-300"}`}>{skill}</div>
                            ))}
                        </div>


                    </div>
                </div>
            ))}


        </div>
    )
}

export default Project