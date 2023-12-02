import imageweb3mobile from '../assets/images/image-web-3-mobile.jpg'
import imageweb3desktop from '../assets/images/image-web-3-desktop.jpg'

const Home = () => {
  return (
    <div className="py-8 px-5">
      <picture>
        <source media='(min-width: 641px)' srcSet={imageweb3desktop} />
        <source media='(max-width: 640px)' srcSet={imageweb3mobile} />
        <img src='' className='md:w-[1000px] md:h-[450px]' alt="web3"/>
      </picture>
      
      <div className='md:flex md:mt-[50px] md:items-center' >
        <h1 className='font-extrabold text-5xl font-Inter py-3  text-[56px] my-5 '>The Bright Future of Web 3.0?</h1>
        <div className=''>
          <p className='text-[18px] text-Dark-grayish-blue font-Inter mb-5 leading-8 ' >We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise? </p>
          <button className='bg-Soft-red text-Off-white px-9 py-3 tracking-[4px] uppercase' >Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Home