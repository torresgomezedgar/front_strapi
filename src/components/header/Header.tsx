import { useState, useEffect } from "react";
import { fetchApi } from "../../services/strapi.js";
import Menu from "../menu/Menu.js";


interface HomeContenido {
  titulo: string;
  descripcion: string;
  imagen?: {
    //data?: {
      //attributes?: {
        url: string;
      //};
    //};
  };
}


function Header() {

  const [contenido, setContenido] = useState<HomeContenido | null>(null);

  useEffect(() => {
    async function cargarData() {
      const resp = await fetchApi("home")
      if (resp?.data) {
        const data = resp.data
        //console.log(data)
        setContenido(data);
        // Solo mostrar si no ha sido visto antes
        
      }
    }
    cargarData()
  }, []);

  if (!contenido) return null; // No mostrar nada si ya fue visto o sin datos

  //console.log(contenido)

  return (
    <>
      <div className="navbar bg-base-300 w-full sticky top-0 z-50">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="avatar">
          <div className="mask mask-hexagon-2 w-8">
            <img src={contenido.imagen.url} />
          </div>
        </div>
        <div className="mx-2 flex-1 px-2">{contenido.titulo}</div>
        <div className="hidden flex-none lg:block">
          <ul className="menu menu-horizontal">
            {/* Navbar menu content here */}
            <Menu />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header


