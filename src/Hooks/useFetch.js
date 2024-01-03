import { useEffect, useState } from "react";

export const useFetch = (pais) => {
    const [datosActuales, setDatosActuales] = useState([]);
    const [datos5Dias3Horas, setDatos5Dias3Horas] = useState([]);
    const [datosPaises, setDatosPaises] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const API_KEY = 'a71cc53bd036feb7b9f19381de190fa2';
    const urlDatosActuales = `https://api.openweathermap.org/data/2.5/weather`;
    const urlDatos5Dias3Horas = `https://api.openweathermap.org/data/2.5/forecast`;
    const urlDatosPaises = 'https://restcountries.com/v3.1'

    const fetchData = async () => {
        try {
            const [response1, response2, response3] = await Promise.all([
                fetch(`${urlDatosActuales}?q=${pais}&appid=${API_KEY}`),
                fetch(`${urlDatos5Dias3Horas}?q=${pais}&appid=${API_KEY}`),
                fetch(`${urlDatosPaises}/name/${pais}`)
            ]);

            const dataActuales = await response1.json();
            const data5Dias3Horas = await response2.json();
            const dataPaises = await response3.json();

            if (response1.ok && response2.ok && response3.ok) {
                setDatosActuales(dataActuales);
                setDatos5Dias3Horas(data5Dias3Horas);
                setDatosPaises(dataPaises);
                setIsLoading(false);
            } else {
                setIsLoading(false);
            }
        } catch (error) {
            console.error('El error de llamado de API es: '+error)
        }
    }

    useEffect(() => {
        fetchData();
    },[pais]);

    return {
        datosActuales,
        datos5Dias3Horas,
        datosPaises,
        isLoading
    }
}
