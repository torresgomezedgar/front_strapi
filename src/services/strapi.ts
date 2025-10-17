export async function fetchApi(
    collection: string,
    forceUpdate: boolean = false // 👈 parámetro opcional para forzar actualización
) {
    const cacheKey = `strapi_${collection}`;

    // 🔹 Reglas especiales: algunas colecciones siempre deben consultarse
    const alwaysFetch = ["articles"]; // puedes agregar más: ["articles", "homepage", "settings"]

    // 1️⃣ Si no está en la lista de alwaysFetch y no se fuerza actualización
    if (!alwaysFetch.includes(collection) && !forceUpdate) {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
            try {
                const parsed = JSON.parse(cached);
                console.log(`✅ Usando caché local para ${collection}`);
                return parsed;
            } catch {
                console.warn(`⚠️ Caché corrupto, se eliminará: ${cacheKey}`);
                localStorage.removeItem(cacheKey);
            }
        }
    }

    // 2️⃣ Si llega aquí, consulta la API
    console.log(`🌐 Consultando API Strapi para ${collection}`);

    try {
        const API_URL = import.meta.env.VITE_STRAPI_URL;
        const API_TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

        const headersList = {
            "Accept": "application/json",
            "Authorization": API_TOKEN,
        };

        const res = await fetch(`${API_URL}api/${collection}?populate=*`, {
            method: "GET",
            headers: headersList,
        });

        if (!res.ok) throw new Error(`Error al obtener datos de ${collection}`);

        const data = await res.json();

        // 3️⃣ Guardar en caché si aplica
        if (!alwaysFetch.includes(collection)) {
            localStorage.setItem(cacheKey, JSON.stringify(data));
            console.log(`💾 Caché actualizado para ${collection}`);
        } else {
            console.log(`🚫 No se almacena caché para ${collection}`);
        }

        return data;
    } catch (err) {
        console.error(`❌ Error en fetchApi(${collection}):`, err);
        return null;
    }
}




