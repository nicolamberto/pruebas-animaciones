'use client'

import { motion } from 'framer-motion';
import React, { useState } from 'react'

import { DiHtml53dEffects } from "react-icons/di";


export default function ServiceCard() {

    const [isHovering, setIsHovering] = useState(false); // Estado para controlar el hover


    return (
        <div className='py-20 w-full flex flex-row justify-center items-center'>

            <motion.div
                className="relative p-1 rounded-[18px]"
                animate={
                    isHovering
                        ? { background: `conic-gradient(from 360deg, #4f46e5, #a78bfa, #4f46e5)`}
                        : { background: `conic-gradient(from 0deg, #4f46e5, #a78bfa, #4f46e5)`}
                }
                transition={{
                    duration: isHovering ? 3 : 0.05, // Duración de la animación
                    ease: 'linear', // Movimiento suave
                    repeat: isHovering ? Infinity : 0, // Repetir indefinidamente mientras se haga hover
                }}
                onMouseEnter={() => setIsHovering(true)} // Inicia la animación al hacer hover
                onMouseLeave={() => setIsHovering(false)} // Detiene la animación al salir
            >
                <motion.div
                    className="relative z-10 w-[300px] rounded-[18px] text-white p-7 flex flex-col justify-center items-center transition"
                    style={{
                        backgroundColor: 'rgba(79, 70, 229, 1)', // Color inicial (indigo-900)
                    }}
                    whileHover={{
                        filter: 'brightness(1.1)', // Aumenta el brillo al hacer hover // Color con opacidad al hacer hover
                    }}
                    transition={{
                        duration: 0.3, // Duración de la transición de opacidad
                        ease: 'easeInOut', // Movimiento suave
                    }}                >
                    <div className="border-[3px] text-indigo-500 border-indigo-500 text-[55px] rounded-full p-2 mb-7">
                        <DiHtml53dEffects />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-5 z-20">
                        <p className='text-[25px] font-bold'>
                            Desarrollo Web
                        </p>
                        <p className='text-[15px] text-gray-400'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolorem blanditiis. Magnam facere enim dolorum excepturi ratione at culpa vero nemo. Ullam vel excepturi labore? Tempore, molestiae!
                        </p>
                    </div>
                </motion.div>
            </motion.div>

        </div>
    )
}
