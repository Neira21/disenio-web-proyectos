const ElementNews = ({titulo, descripcion}) => {
  return (
    <div>
      <h1 className="text-Off-white text-[24px] font-bold mb-2 " >{titulo}</h1>
      <p className="text-Grayish-blue text-[18px] font-Inter leading-9  " >{descripcion}</p>
    </div>
  )
}

export default ElementNews