import Card from "./CardContent"

const cardContent = [
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
        category: "Solo Chateando",
        viewCount: "320.1 k",
        labels: ["IRL(vida real)"],
    },
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/21779-624x832.jpg",
        category: "Por favor no",
        viewCount: "123.1 k",
        labels: ["Simulación", "Juego de Rol"],
    },
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg",
        category: "Special Events",
        viewCount: "123.1 k",
        labels: ["IRL(vida real)"],
    },
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/1863222988-285x380.jpg",
        category: "Kings League",
        viewCount: "91.2 k",
    },
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
        category: "Maincra",
        viewCount: "32.1 k",
        labels: ["Simulación"]
    },{
        img: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
        category: "El Valo",
        viewCount: "4.1 k",
        labels: ["Shooter"],
    },{
        img: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
        category: "El Fornait",
        viewCount: "2 k",
        labels: ["Shooter", "Juego de Rol"]
    },
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
        category: "Call of Duty: Warzone",
        viewCount: "1 k",
        labels: ["Shooter"],
    },
    
    
]

const RenderCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {cardContent.map((content) => (
                <Card
                    key={`content-${content.category}`}
                    img={content.img}
                    category={content.category}
                    viewCount={content.viewCount}
                    labels={content.labels}
                />
            ))}
        </div>
    )
}

export default RenderCards