import ExploreCategories from "./botonCategorias"
import RenderCards from "./Cardss"

export default function Contenido() {
    return (

      <section className="grid gap-7 lg:col-start-2 lg:col-end-3 bg-[#0E0E10] px-6 py-10">
        <div className="flex w-full flex-col gap-7">
            <h1 className="text-6xl font-bold text-white">Explorar</h1>
            
          <ExploreCategories/>
          <div className="flex flex-row items-center font-semibold  mr-1">
            
            <a href="#"><p className="ml-1 p-1 text-purple-400 border-b-purple-400">Categorías</p></a>
            <a href="#"><p className="ml-1 p-1 text-white border-b-purple-400 hover:text-purple-400">Canales en vivo</p></a>
          
         </div>
         <div className="flex flex-row justify-between items-center">
  <div className="flex items-center gap-1 pl-4">
    <div className="flex items-center border border-white rounded">
      <button className="h-6">
        <img src="https://cdn-icons-png.flaticon.com/512/709/709592.png" alt="" className="h-4 px-2 negative-img" />
      </button>
      <input
        className="w-full bg-transparent block px-4 py-2 text-gray-900 focus:outline-none"
        type="text"
        placeholder="Buscar etiquetas de categorías"
      />
    </div>
  </div>

  <div className="flex items-center">
    <span className="text-white">Ordenar por</span>
    <select className="ml-1 bg-black border border-gray-300 rounded-md px-3 py-2 text-white focus:border-purple-800">
      <option value="" disabled selected></option>
      <option value="mas-espectadores">Recomendaciones para ti</option>
      <option value="mas-espectadores">Más espectadores</option>
      
    </select>
  </div>
</div>

           </div>
              
                <div>
                  <RenderCards/>
                </div>
</section>
    )}