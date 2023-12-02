/* eslint-disable */

import { useEffect, useState } from "react"
import dividerMobile from './assets/pattern-divider-mobile.svg'
import dividerDesktop from './assets/pattern-divider-desktop.svg'

import iconButton from './assets/icon-dice.svg'

const URL_API = 'https://api.adviceslip.com/advice'

function App() {
  const [consejo, setConsejo] = useState({})
  const [error, setError] = useState(null)

  const ObtenerConsejo = async () => {
    try {
      let numero = await NumeroRandom_1_224()
      const response = await fetch(`${URL_API}/${numero}`)
      const data = await response.json()
      console.log(data)
      setConsejo(data.slip)

    }catch (error) {
      console.log(error)
      setError(error)
    }
  }

  const NumeroRandom_1_224 = () => {
    return Math.floor(Math.random() * (224 - 1) + 1)
  }

  useEffect(() => {
    ObtenerConsejo()
  }, [])

  return (
    <div className="font-Manrope bg-Dark-Blue h-[100vh] pt-48" >
      <article className="bg-Dark-Grayish-Blue p-16 mx-auto rounded-lg text-center relative w-[400px] md:w-[780px] ">
        <h1 className="text-Neon-Green tracking-[4px] uppercase mb-4" >Advice  #<span>{consejo?.id}</span></h1>
        {/* etiqueta p con text con comillas */}
        <p className="text-Light-Cyan text-[22px] leading-[32px] mb-8 font-extrabold ">{consejo?.advice}</p>
        <picture>
          <source media = "(max-width:640px)" srcSet={dividerMobile} />
          <source media = "(min-width:641px)" srcSet={dividerDesktop} />
          <img className="mx-auto" src='' alt="divisor" />
        </picture>
        <button className="bg-Neon-Green  rounded-full w-[66px] h-[66px] grid place-content-center absolute bottom-[-33px] left-[170px] cursor-pointer hover:drop-shadow-[0_0px_16px_hsl(150,100%,66%)] 
        md:left-[358px]" onClick={ObtenerConsejo} >
          <img src={iconButton} alt="boton" />
        </button>
      </article>
    </div>
  )
}

export default App
