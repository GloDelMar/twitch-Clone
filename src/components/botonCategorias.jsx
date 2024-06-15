import BotonDeCategoria from "./AllCategoriaBotones"

const explore = [
    {
        category: "Juegos",
        img: "https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg"
    },
    {
        category: "IRL",
        img: "https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg"
    },
    {
        category: "Música",
        img: "https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg"
    },
    {
        category: "Creativo",
        img: "https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg"
    },
    {
        category: "Esports",
        img: "https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg"
    },
];

const ExploreCategories = () => {
    return (
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {explore.map((exploreItem) => (
                <BotonDeCategoria
                    key={exploreItem.category}
                    category={exploreItem.category}
                    img={exploreItem.img}
                />
            ))}
        </div>
    )
}

export default ExploreCategories
