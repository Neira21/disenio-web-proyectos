import Imagen from "./Imagen"
import Texto from "./Texto"
import ImagenTexto from "./ImagenTexto"

import eggMobile from '../assets/mobile/image-transform.jpg'
import eggDesktop from '../assets/desktop/image-transform.jpg'
import copaMobile from '../assets/mobile/image-stand-out.jpg'
import copaDesktop from '../assets/desktop/image-stand-out.jpg'
import cherryMobile from '../assets/mobile/image-graphic-design.jpg'
import cherryDesktop from '../assets/desktop/image-graphic-design.jpg'
import orangeMobile from '../assets/mobile/image-photography.jpg'
import orangeDesktop from '../assets/desktop/image-photography.jpg'

import graphicDesignMobile from '../assets/mobile/image-graphic-design.jpg'
import graphicDesignDesktop from '../assets/desktop/image-graphic-design.jpg'
import photographyMobile from '../assets/mobile/image-photography.jpg'
import photographyDesktop from '../assets/desktop/image-photography.jpg'

const Services = () => {
  return (
    <section className="tablet:grid tablet:grid-cols-2">
      <Texto titulo='Transform your brand' texto='We are a full-service creative agency specializing in helping brands grow fast. 
      Engage your clients through compelling visuals that do most of the marketing for you.' color='bg-yellow-500' />
      <Imagen imagenDeskopt={eggDesktop} imagenMobile={eggMobile} />
      <Imagen imagenDeskopt={copaDesktop} imagenMobile={copaMobile} />
      <Texto titulo='Stand out to the right audience' texto='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
      color='bg-Soft-red'
      />    

      <ImagenTexto imagenDeskopt={graphicDesignDesktop} imagenMobile={graphicDesignMobile} titulo='Graphic design' texto='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'/>

      <ImagenTexto imagenDeskopt={photographyDesktop} imagenMobile={photographyMobile} titulo='Photography' texto='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'/>
      
      

    </section>
    
  )
}

export default Services