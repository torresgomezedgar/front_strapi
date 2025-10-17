const API_URL = import.meta.env.VITE_STRAPI_URL;
const API_TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

let headersList = {
    "Accept": "*/*",
    "Authorization": API_TOKEN
}

export async function fetchApi(collection: string) {

    const cacheKey = `strapi_${collection}`;

    // 1️⃣ Revisa si existe en localStorage
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
        try {
            const parsed = JSON.parse(cached);
            console.log(`✅ Usando caché local para ${collection}`);
            return parsed;
        } catch {
            localStorage.removeItem(cacheKey); // Si hay error, limpia y fuerza refetch
        }
    }
    console.log(`🌐 Consultando API Strapi para ${collection}`);
    try {

        const res = await fetch(`${API_URL}api/${collection}?populate=*`, {
            method: "GET",
            headers: headersList,
        });
        if (!res.ok)
            throw new Error('Error al obtener datos');
        const data = await res.json();
        //console.log(data);
        //Guarda en localStorage para futuras cargas
        localStorage.setItem(cacheKey, JSON.stringify(data));
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}




