import React, { useEffect, useState } from 'react'
import { Card } from './Components/Card/Card';
import { useDate } from './Hooks/useDate';
import { useFetch } from './Hooks/useFetch';
import { Skeleton } from '@mui/material';
import { Navbar } from './Components/Navbar/Navbar';

export const ClimaVision = () => {
    const [nuevoPais, setNuevoPais] = useState('');
    const [selectedPais, setSelectedPais] = useState('');

    const { soloPais } = useDate();
    const { datosActuales, datos5Dias3Horas, datosPaises, isLoading } = useFetch(selectedPais || soloPais);

    const submitNuevoPais = (e) => {
        e.preventDefault();
        setSelectedPais(nuevoPais);
    }

    useEffect(() => {
        setSelectedPais(soloPais);
    }, [soloPais]);

    return (
        <>
            {isLoading
                ? // Esqueleto es Caso de que la API dañe el Front
                <>
                    <Navbar
                        isLoading={isLoading}
                    />
                    <div className="flex items-center px-12">
                        <Skeleton
                            variant="rounded"
                            width={850}
                            height={450} />
                    </div>
                </>

                : // Front Real y Verdadero
                <>
                    <Navbar
                        isLoading={isLoading}
                        nuevoPais={nuevoPais}
                        submitNuevoPais={submitNuevoPais}
                        setNuevoPais={setNuevoPais}
                    />

                    <div className="flex items-center px-12 py-8 max-[767px]:px-6 max-[767px]:justify-center">
                        <div className="flex justify-center w-3/5 h-5/6 rounded-2xl shadow-2xl shadow-slate max-[767px]:w-4/5 min-[768px]:w-5/6 min-[1024px]:w-4/6 min-[1280px]:w-3/5">
                            <div className="flex flex-col items-start justify-center px-5 py-2 w-full">
                                <div className="flex max-[767px]:w-full max-[767px]:justify-between max-[767px]:items-center">
                                    <h2 className='font-bold text-[35px] font-[sans-serif]'>{datosActuales.name}</h2>
                                    <img
                                        className='hidden max-[767px]:block rounded-full shadow-xl shadow-slate-400 w-12 h-12'
                                        src={datosPaises[0].flags.png}
                                        alt="Bandera Pais" />
                                </div>
                                <h3 className='text-4xl'>{parseInt(datosActuales.main.temp - 273.15)} °C</h3>
                                <h2 className='text-2xl font-semibold pt-2'>{datosActuales.weather[0].main}</h2>
                                <div className="max-[767px]:w-full max-[767px]:flex max-[767px]:items-center max-[767px]:justify-center">
                                    <img
                                        className=''
                                        src={`https://openweathermap.org/img/wn/${datosActuales.weather[0].icon}@4x.png`}
                                        alt="Icono" />
                                </div>
                            </div>

                            <div className="w-full flex items-center justify-center max-[767px]:hidden min-[1024px]:px-3">
                                <img
                                    className='rounded-full w-80 h-80 shadow-xl shadow-slate-400 min-[768px]:w-64 min-[768px]:h-64 min-[1024px]:w-72 min-[1024px]:h-72 '
                                    src={datosPaises[0].flags.png}
                                    alt="Bandera Pais" />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center bg-[#080F0F] text-white py-5 gap-5 flex-wrap min-[768px]:px-1 ">
                        {
                            datos5Dias3Horas.list.map((data, index) => (
                                <Card
                                    key={index} // Agrega una key única
                                    data={data}
                                />
                            ))
                        }
                    </div>
                </>
            }
        </>
    )
}
