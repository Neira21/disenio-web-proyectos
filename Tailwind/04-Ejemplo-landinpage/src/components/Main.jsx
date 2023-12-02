import fondoHeaderDesktop from '../assets/desktop/image-header.jpg'
import fondoHeaderMobile from '../assets/mobile/image-header.jpg'
import arrow from '../assets/icon-arrow-down.svg'

const Main = () => {
  return (
    <section>
      <picture>
        <source media='(max-width:639px' srcSet={fondoHeaderMobile} />
        <source media='(min-width:640px' srcSet={fondoHeaderDesktop} />
        <img src={fondoHeaderMobile} alt="background header" />
      </picture>
      <div>
      <p className='absolute text-[40px] top-[120px] right-0 left-0 mx-auto w-[337px] font-Fraunces uppercase tracking-[6.25px] text-center text-white md:w-[600px] md:top-[200px] ' >We are creatives</p>
      <img className='absolute top-[250px] left-0 right-0 mx-auto md:top-[300px] tablet:top-[250px]' src={arrow} alt="icon-arrow-down" />
      </div>
    </section>
  )
}

export default Main