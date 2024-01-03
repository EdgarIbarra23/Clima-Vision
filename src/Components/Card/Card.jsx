import React from 'react'

export const Card = ({ data }) => {

    const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const fecha = new Date(data.dt_txt);
    const hora = fecha.getHours();
    const dia = fecha.getDay();

    return hora % 12 == 0 ?(
        <div className="px-4 w-60 shadow-sm shadow-slate-400 rounded-xl">
            <p className='text-sm pt-6 font-semibold'>{dias[dia]} - {data.dt_txt}</p>
            <h3 className='text-3xl'>{parseInt(data.main.temp - 273.15)}°C</h3>
            <h2 className='text-2xl font-bold'>{data.weather[0].main}</h2>
            <img
                className='w-full h-full'
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                alt="Icono" />
        </div>
    ) : null;
}
