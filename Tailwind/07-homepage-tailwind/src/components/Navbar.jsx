import logo from '../assets/images/logo.svg'
import iconMenu from '../assets/images/icon-menu.svg'
import iconMenuClose from '../assets/images/icon-menu-close.svg'


import {useState} from 'react'
import './css.css'



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(true)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <div className='flex place-content-between items-center mx-3'>
      <div className='flex px-5 py-6 place-content-between items-center ' >
        <img src={logo} alt="logo" />
      </div>

      <ul className={`absolute bg-white top-0 right-0 w-[256px] p-[24px] h-full text-[18px] md:flex md:items-center md:w-[438px] md:place-content-around md:p-0 md:h-auto md:relative md:text-[16px] ${isOpen ? 'hidden' : ''} `}  >
          <li className={`${isOpen ? 'hidden' : ''} cursor-pointer sm:hidden  flex place-content-end`}>
            <img className='w-8 h-8 mb-[87px]' src={iconMenuClose} onClick={handleOpen} alt="" />
          </li>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>News</li>
          <li className='cursor-pointer'>Popular</li>
          <li className='cursor-pointer'>Trending</li>
          <li className='cursor-pointer'>Categories</li>
      </ul>
      <img onClick={handleOpen} className=' w-14 h-7 cursor-pointer md:hidden ' src={iconMenu} alt="boton-open" />

      {/*     
      <div className={`h-[100vh] w-[350px] fixed top-0 right-0 px-8 py-5 z-1 bg-white	 ${!isOpen ? 'hidden' : ''}`}>
        <div className='flex justify-end'>
          <img onClick={handleOpen}  className='cursor-pointer my-5' src={iconMenuClose} alt="boton-close" />
        </div>
        <ul className='flex flex-col gap-5 relative top-20 le text-[22px]' >
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>News</li>
          <li className='cursor-pointer'>Popular</li>
          <li className='cursor-pointer'>Trending</li>
          <li className='cursor-pointer'>Categories</li>
        </ul>
      </div> */}
      
    </div>
    {/* <ul className={`${isOpen ? 'hidden' : ''} absolute bg-white top-0 right-0 w-[256px] p-[24px] h-full text-[18px] sm:flex sm:items-center sm:w-[438px] sm:place-content-around sm:p-0 sm:h-auto sm:relative sm:text-[16px]`}>
        <li className={`${isOpen ? 'hidden' : ''} cursor-pointer sm:hidden  flex place-content-end`}>
          <img className='w-8 h-8 mb-[87px]' src={iconMenuClose} onClick={handleOpen} alt="" />
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-SoftRed sm:text-4' href="#">Home</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-SoftRed' href="#">New</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-SoftRed' href="#">Popular</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-SoftRed' href="#">Trending</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-SoftRed' href="#">Categories</a>
        </li>
      </ul>
      <img className={`${isOpen ? '' : 'hidden'} w-10 h-4 cursor-pointer sm:hidden`} src={iconMenu} onClick={handleOpen} alt="" /> */}
    </>
  )
}

export default Navbar