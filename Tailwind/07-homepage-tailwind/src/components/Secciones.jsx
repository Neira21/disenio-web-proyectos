import ElementSection from "./ElementSection"

import retro from "../assets/images/image-retro-pcs.jpg"
import laptops from "../assets/images/image-top-laptops.jpg"
import gaming from "../assets/images/image-gaming-growth.jpg"


const Secciones = () => {
  return (
    <div className="mt-10 mb-16 md:flex" >
      <ElementSection imagen={retro} numero='01' titulo='Reviving Retro PCs ' descripcion='What happens when old PCs are given modern upgrades?' />
      <ElementSection imagen={laptops} numero='02' titulo='Top 10 Laptops of 2022 ' descripcion='Our best picks for various needs and budgets. ' />
      <ElementSection imagen={gaming} numero='03' titulo='The Growth of Gaming ' descripcion='How the pandemic has sparked fresh opportunities.' />
    </div>
  )
}













// Challenge by Frontend Mentor. Coded by Your Name Here.

export default Secciones