import { Skeleton, TextField } from '@mui/material'
import ClimaVisionLogo from "../../Assets/LogoClimaVision.png";
import React from 'react'

export const Navbar = ({ isLoading, submitNuevoPais, nuevoPais, setNuevoPais }) => {
    return isLoading ? (
        <div className='flex justify-between items-center px-12 py-3 max-[767px]:flex-col max-[767px]:px-2'>

            <div className="flex justify-center items-center gap-3 max-[767px]:w-full">
                <Skeleton
                    variant="circular"
                    width={80}
                    height={80} />

                <Skeleton
                    variant='text'
                    sx={{ fontSize: '36px' }}
                    width={200}
                />
            </div>

            <Skeleton
                variant='text'
                width={288}
                height={100}
            />
        </div>
        
    ) : (
        <div className='flex justify-between items-center px-12 py-3 max-[767px]:flex-col max-[767px]:px-2 max-[767px]:gap-4'>

            <div className="flex justify-center items-center gap-3 max-[767px]:w-full">
                <img
                    src={ClimaVisionLogo}
                    alt="Logo Clima Vision"
                    className='w-20 rounded-full' />

                <h1 className='text-4xl font-bold text-sky-400'>Clima Vision</h1>
            </div>

            <form onSubmit={submitNuevoPais}>
                <TextField
                    className='w-72 max-[767px]:bg-white max-[767px]:w-80'
                    label='Buscar Pais'
                    value={nuevoPais}
                    onChange={(e) => setNuevoPais(e.target.value)}
                />
            </form>
        </div>
    )
}
