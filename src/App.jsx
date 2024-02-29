
import './App.css'
import Navbar from './components/navbar/Navbar'
import Sections from './components/sections/Section'
import Sidebar from './components/sidebar/Sidebar'


import { useModeContext } from './main'


function App() {
  const { darkMode } = useModeContext()

  const mode = darkMode ? "dark" : "light"
  const text = darkMode ? "light" : "dark"

  const sections = [
    { id: 'about', title: 'About' },
    { id: 'project', title: 'Project' },
  ];

  return (
    <div className={`bg-${mode} `}>
      <div className={`max-w-6xl mx-auto bg-${mode}  ${darkMode ? 'text-white' : 'text-black'}  `} >

      <div className={`max-w-6xl bg-${mode} fixed  w-full z-50`}>
        <div className="flex justify-between z-5 p-3 shadow">
          <Navbar sections={sections} />
        </div>
      </div>

      <div className="grid lg:grid-cols-[2fr_3fr] gap-3 ">

        <div className={`bg-${mode} w-full `}>
          <Sidebar sections={sections} />
        </div>

        <div className={`bg-${mode}`}>
          <Sections />
        </div>

      </div>
    </div>
    </div>
    

    // <div className={` bg-${mode}  ${darkMode ? 'text-white' : 'text-black'} flex relative justify-center scroll-smooth w-full bg-slate-400 overflow-y-scroll h-svh`}>

    //   <div className='md:flex md:relative gap-5  h-screen  w-[1000px]'>


    //     <div className={`col-span-3 bg-${mode} absolute top-0 right-0 w-full z-10`}>
    //       <div className="flex justify-between z-5 p-3 shadow">
    //         <Navbar sections={sections} />
    //       </div>
    //     </div>

    //     <div className={`bg-${mode} w-full  `}>
    //       <Sidebar sections={sections} />
    //     </div>

    //     <div className={`bg-${mode}`}>
    //       <Sections />
    //     </div>

    //   </div>


    // </div>
  )
}

export default App