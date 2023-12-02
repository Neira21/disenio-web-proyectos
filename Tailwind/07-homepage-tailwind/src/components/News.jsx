import ElementNews from "./ElementNews"

const News = () => {
  return (
    <div className="bg-Very-dark-blue w-[460px] mx-auto p-[35px] mt-7 md:w-[850px] ">
      <h1 className="text-Soft-orange text-[40px] font-bold mb-[30px] " >New</h1>
      <ElementNews titulo='Hydrogen VS Electric Cars' descripcion='Will hydrogen-fueled cars ever catch up to EVs?' />
      <hr className="my-[40px]" />
      <ElementNews titulo='The Downsides of AI Artistry ' descripcion='What are the possible adverse effects of on-demand AI image generation? ' />
      <hr className="my-[40px]" />
      <ElementNews titulo='Is VC Funding Drying Up?' descripcion='Private funding by VC firms is down 50% YOY. We take a look at what that means.' />
    </div>
  )
}

export default News