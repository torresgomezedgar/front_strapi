import { useEffect, useState } from "react";
import { fetchApi } from "../services/strapi.js";

const samplePosts = [
    {
        id: 1,
        title: 'La estética del software: por qué importa',
        excerpt:
            'Reflexiones sobre cómo el diseño y la experiencia del usuario influyen en la adopción y el mantenimiento del software.',
        author: 'María López',
        date: 'Oct 10, 2025',
        readTime: '6 min',
        cover: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1200&q=60',
        category: 'Diseño',
    },
    {
        id: 2,
        title: 'Microservicios y límites del crecimiento',
        excerpt:
            'Cuando dividir no es la solución: entender costes operativos y límites arquitectónicos.',
        author: 'Andrés Ruiz',
        date: 'Sep 20, 2025',
        readTime: '8 min',
        cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60',
        category: 'Arquitectura',
    },
    {
        id: 3,
        title: 'Filosofía de la tecnología: herramientas que nos moldean',
        excerpt:
            'Cómo eliges tus herramientas y cómo ellas te eligen a ti. Un ensayo sobre reciprocidad técnica.',
        author: 'Sofía González',
        date: 'Aug 12, 2025',
        readTime: '10 min',
        cover: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=60',
        category: 'Filosofía',
    },
];


function Content() {

    const [contenido, setContenido] = useState(null);
    useEffect(() => {
        async function cargarData() {
            const resp = await fetchApi("articles")
            if (resp?.data) {
                const data = resp.data
                console.log(data)
                setContenido(data);
                // Solo mostrar si no ha sido visto antes
            }
        }
        cargarData()
    }, []);

    if (!contenido) return null;

    function fecha(iso: string): string {
        const fecha = new Date(iso);
        return fecha.toLocaleString("es-CO", {
            dateStyle: "short",
            timeStyle: "medium",
            timeZone: "America/Bogota"
        });
    }

    return (
        <>
            {/* Grid de posts */}
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
                {contenido.map((post) => (
                    <article key={post.id} className="card card-compact bg-base-100 shadow-md rounded-xl overflow-hidden">
                        <figure className="h-44">
                            <img src={post.cover.url} alt={post.title} className="object-cover w-full h-full" />
                        </figure>
                        <div className="card-body">
                            <div className="flex justify-between items-start">
                                <h3 className="card-title text-lg">{post.title}</h3>
                                <div className="badge badge-outline">{post.category.name}</div>
                            </div>
                            <p className="text-sm opacity-80">{post.excerpt}</p>
                            <div className="card-actions justify-between items-center mt-2">
                                <div className="flex items-center gap-3">
                                    <div className="avatar"><div className="w-8 rounded-full bg-neutral text-white">AR</div></div>
                                    <div className="text-xs opacity-80">
                                        <div>{ }</div>
                                        <div className="text-[11px]">{fecha(post.createdAt)} · {post.readTime}</div>
                                    </div>
                                </div>
                                <button className="btn btn-sm btn-ghost">Leer</button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </>
    )
}

export default Content