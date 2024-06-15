
export default function BotonDeCategoria({category, img}) {
    return (
        <div className="h-11 cursor-pointer hover:bg-[#583394] bg-[#5C16C5] rounded-lg px-5 flex">
            <a href="" className="flex items-center justify-between w-full">
            <span className="text-xl font-bold object-cover text-white">{category}</span>
            <img src={img} alt="" />
            </a>
        </div>
    )
}