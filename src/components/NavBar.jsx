import Twitch from "./TwitchLogo"


export default function NavBar() {
    return (
      <nav className="col-start-1 col-end-3 grid grid-cols-3 font-semibold items-center text-white bg-neutral-950">
      <div className="flex flex-row items-center gap-1 pl-4">
        <div className="hover:translate-x-1 hover:-translate-y-1"><Twitch height="1.8rem" width="3rem" /></div>
        <div className="flex flex-row items-center font-semibold  mr-1">
          
          <a href="#"><p className="ml-1 p-1 text-purple-400 border-b-purple-400">Explorar</p></a>
          <a href="#"><img src=" https://cdn.icon-icons.com/icons2/2954/PNG/512/three_dots_vertical_menu_icon_184615.png" alt="menu"  className="h-6  negative-img hover:bg-[#d0d3d3] rounded ml-2"/> </a>
         
        </div>
      </div>
      <div className="flex flex-row">
      <div className="flex flex-row items-center gap-1 pl-4"><input className="w-full py-1 px-2 border-solid border-white rounded-l-lg bg-transparent block border-0 pl-7 pr-20 text-gray-900 ring-1  ring-gray-300 placeholder:text-gray-400 focus:ring-8  focus:ring-purple-800 sm:text-sm sm:leading-6" type="text" placeholder="Search" /></div>
      <button className="bg-slate-700 hover:bg-slate-400 rounded-r-lg h-9 " ><img src="https://cdn-icons-png.flaticon.com/512/709/709592.png" alt="" className="h-6 px-2 negative-img" /></button>
      </div>
      <div className="flex justify-end align-middle">
      
        <a href="#"  className= "hover:bg-slate-700 rounded h-8 ">
          <img src="https://cdn.icon-icons.com/icons2/1898/PNG/512/crown_121022.png" alt="crown" className="h-6 px-2 negative-img"/></a>
        <a href="#" className="p-1 bg-slate-700 rounded ml-3">Iniciar Sesión</a>
        <a href="#" className="p-1 bg-blue-800 rounded ml-2">Registrarse</a>
        <a href="#"><img className="w-8 h-auto rounded-[50%] mr-2 ml-2 negative-img"
                src=" https://cdn.icon-icons.com/icons2/3298/PNG/512/ui_user_profile_avatar_person_icon_208734.png" alt="user"    />
        </a>
      </div>     
    </nav>
   
    )
  }