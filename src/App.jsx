import NavBar from "./components/NavBar";
import Recomendados from "./components/Recomendados";
import Contenido from "./components/Contenido";

export default function App() {
  return (
       <main className="w-full bg-black min-h-screen p-4 grid grid-cols-[20%_1fr] grid-rows-[3.2rem_1fr]">
    <NavBar/>
    <Recomendados/>
    <Contenido/>
    </main>
  );
}