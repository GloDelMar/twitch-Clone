import RecomendadosChannels from "./ChannelsInfoMenu"
import ImageIcon from "./AllUsersIcon"


export default function Recomendados() {
    return (
<aside className="grid-cols-3 grid-rows-3 pb-4  bg-[#1F1F23]">
<section>
    <section>
    <div className="grid grid-cols-3">
        <div className="col-span-2">
        <p className="mt-1 ml-3 font-semibold text-sm lg:text-sm text-white hidden lg:block">CANALES RECOMENDADOS</p>
        <img src="https://icons.veryicon.com/png/o/miscellaneous/ui-basic-linear-icon/video-camera-28.png" alt="" className="block lg:hidden negative-img w-8 h-auto mr-2 ml-3" />
        </div>
        <div className="flex justify-end items-center">
        
        <img src="https://cdn3.iconfinder.com/data/icons/arrows-219/24/expand-left-512.png" alt="" className="hidden lg:block negative-img w-8 h-auto mr-2 ml-2" />
        </div>
    </div>
    </section>

    <section className="grid grid-cols-3 ">
        <div className=" align-middle">
            <ImageIcon/>
        </div>
        <div className=" hidden lg:block w-full col-span-2 ">
            <RecomendadosChannels/>
        </div>
    </section>
</section>
</aside>
    )}