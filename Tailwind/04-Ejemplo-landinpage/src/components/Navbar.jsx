import icon_hamburguesa from '../assets/icon-hamburger.svg'
import { useState } from 'react'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className='sm:h-[24px]' >
      <ul className={`${showMenu ? 'flex' : 'hidden'} bg-white py-[39px] w-[329px] h-[305px] absolute left-0 right-0 mx-auto top-[106px] flex-col items-center place-content-around z-10

      after:content-[""] after:absolute after:top-[-23px] after:right-0 after:border-[12px] after:border-t-transparent after:border-l-transparent after:border-b-white after:border-r-white text-Dark-grayish-blue text-xl 
      
      sm:flex sm:after:hidden sm:bg-transparent sm:flex-row sm:top-0 sm:w-[400px] sm:h-full sm:py-0 sm:mt-0 sm:relative sm:text-white 

      md:w-[500px]

      `} >
        <li className='cursor-pointer' >About</li>
        <li className='cursor-pointer' >Services</li>
        <li className='cursor-pointer' >Projects</li>
        <li className='cursor-pointer bg-Yellow py-4 px-6 uppercase rounded-full font-bold font-Fraunces text-Very-dark-desaturated-blue sm:py-3 sm:px-3 sm:bg-white sm:hover:bg-opacity-25 sm:hover:text-white '>Contact</li>
      </ul>
      <div className='cursor-pointer sm:hidden' onClick={handleClick}>
        <img src={icon_hamburguesa} alt="menu hamburguesa" />
      </div>
    </nav>
  )
}

export default Navbar