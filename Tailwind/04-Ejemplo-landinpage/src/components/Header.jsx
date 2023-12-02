import logo from '../assets/logo.svg'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='absolute w-full px-6 pt-8 flex font-Barlow' >
      <div className='flex w-full place-content-between '>
        <img src={logo} alt="" />
        <Navbar />
      </div>
    </header>
  )
}

export default Header