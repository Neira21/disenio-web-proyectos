const ElementSection = ({imagen, numero, titulo, descripcion}) => {
  return (
    <div className=" my-2 flex gap-3">
      <img className="flex w-[150px] p-5 flex- " src={imagen} alt="" />
      
      <div className="my-4">
        <h1 className="text-Grayish-blue text-[35px] font-extrabold" >{numero}</h1>
        <h2 className="font-extrabold text-lg" >{titulo}</h2>
        <p className="text-Dark-grayish-blue text-lg">{descripcion}</p>
      </div>
    </div>
  )
}

export default ElementSection