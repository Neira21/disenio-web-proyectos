const ImagenTexto = ({imagenDeskopt, imagenMobile, titulo, texto}) => {
  return (
    <div className="relative pt-[500px] sm:pt-[200px] desktop:h-auto desktop:pt-[600px] tablet:pt-[350px] lg:pt-[500px] md:pt-[450px] xl:pt-[700px]  ">
      <picture className="absolute top-0 z-[-1]" >
        <source media="(max-width:639px)" src={imagenMobile} ></source>
        <source media="(min-width:640px)" src={imagenDeskopt} ></source>
        <img src={imagenMobile} alt="imagen services mobile" />
      </picture>
        
      <h2 className="text-center font-Fraunces text-[28px] text-Dark-desaturated-cyan mb-7 " >{titulo}</h2>
      <p className="text-center font-Barlow text-Dark-desaturated-cyan mx-3 mb-[60px]" >{texto}</p>
      
    </div>
  )
}

export default ImagenTexto