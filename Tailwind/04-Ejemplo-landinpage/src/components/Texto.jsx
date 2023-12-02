const Texto = ({titulo, texto, color}) => {
  return (
    <div className="text-center h-[437px] px-6 flex flex-col place-content-around py-6 tablet:h-auto lg:px-[65px] desktop:text-left desktop:pl-[165px] desktop:py-[140px] desktop:pr-[105px]"  >
      <h2 className="font-Fraunces text-[2rem] font-black tablet:text-[1.25rem] lg:text-[2.5rem] desktop:leading-tight " >{titulo}</h2>
      <p className="font-Barlow text-Dark-grayish-blue text-[1.125rem] leading-[1.875rem] tablet:text-[0.8rem] tablet:leading-[1.25rem] lg:text-[18px] " >{texto}</p>
      <div className="relative">
        <button className="uppercase font-Fraunces ">Learn More</button>
        <div className={`w-[177px] h-[10px] ${color} rounded-full absolute mx-auto left-0 right-0 bottom-0 -z-10 bg-opacity-25 desktop:mx-0 desktop:left-[-10px] `}>
        </div>
      </div>
    </div>
  )
}

export default Texto