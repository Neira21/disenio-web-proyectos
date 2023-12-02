const Imagen = ({imagenDeskopt, imagenMobile}) => {
  return (
    <picture>
      <source media='(max-width:639px' srcSet={imagenMobile} />
      <source media='(min-width:640px' srcSet={imagenDeskopt} />
      <img src={imagenMobile} alt='imagen services' />
    </picture>
  )
}

export default Imagen