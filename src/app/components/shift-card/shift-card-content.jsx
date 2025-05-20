import React from 'react'

import { TextureButton } from '../elements/texture-button/texture-button-initial'

import imgshiftcard from '@/app/lib/imagenes/website.jpg'

import { motion } from 'framer-motion'
import Image from 'next/image'

const MotionImage = motion(Image)

export const topContent = (
    <div className=" bg-accent/90 text-white bg-gray-800 rounded-md text-primary shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)]">
        <h3 className=" text-lg p-5">
            Ecommerce Website
        </h3>
    </div>
)

// Content that animates into top from the middle
export const topAnimateContent = (
    <>
        <MotionImage
            transition={{ duration: 0.3, ease: "circIn" }}
            src={imgshiftcard}
            layoutId="img"
            width={78}
            height={100}
            alt="basic image"
            className="rounded-sm absolute top-1.5 right-2 shadow-lg"
        />

        <motion.div
            className="h-[70px] w-[82px] absolute top-[4px] right-[6px] bg-transparent rounded-br-sm rounded-sm  ml-auto  "
            initial={{ opacity: 0, scale: 1.6, y: 0, filter: "blur(4px)" }}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: { delay: 0.35, duration: 0.15 },
            }}
            exit={{
                opacity: 0,
                y: 100,
                filter: "blur(4px)",
                transition: { delay: 0.0, duration: 0 },
            }}
        />
    </>
)

// Content that animates from the top to the middle
export const middleContent = (
    <MotionImage
        src={imgshiftcard}
        layoutId="img"
        width={150}
        height={200}
        alt="basic image"
        className="rounded-sm"
    />
)

// Content for the bottom part of the card that shows more details on hover
export const bottomContent = (
    <div className="pb-0 h-full">
        <div className="flex w-full h-full flex-col gap-1 bg-indigo-400 border-t border-t-black/10 rounded-t-lg px-4 pb-4  ">
            <div className="font-sans text-[14px] font-medium text-white dark:text-[#171717] flex gap-1 pt-2.5 items-center">
                <p className='text-white'>Como lo construimos?</p>
            </div>
            <div className="w-full text-pretty font-sans text-[13px] leading-4 text-neutral-200 dark:text-[#171717] pb-2  ">
                Sitio Web programado con Next JS, Framer Motion y Tailwind CSS.
            </div>
            <div className="w-full text-pretty font-sans text-[13px] leading-4 text-neutral-200 dark:text-[#171717] pb-2  ">
                Disenado con Adobe Photoshop y Figma.
            </div>

            <div className="bg-accent/80 dark:bg-accent px-1 py-1 rounded-xl flex flex-col gap-1">


                <TextureButton variant="primary">
                    <svg
                        viewBox="0 0 256 256"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid"
                    >
                        <path
                            fill="#625DF5"
                            d="M256 113.765h-74.858l64.83-37.43-14.237-24.667-64.83 37.43 37.421-64.825-24.667-14.246-37.421 64.826V0h-28.476v74.86L76.326 10.027 51.667 24.266 89.096 89.09 24.265 51.668l-14.238 24.66 64.83 37.43H0v28.477h74.85l-64.823 37.43 14.238 24.667 64.824-37.423-37.43 64.825 24.667 14.239 37.429-64.832V256h28.476v-74.853l37.422 64.826 24.665-14.239-37.428-64.832 64.83 37.43 14.24-24.667-64.825-37.423h74.85v-28.477H256ZM128 166.73c-21.472 0-38.876-17.403-38.876-38.876 0-21.472 17.404-38.876 38.876-38.876 21.472 0 38.875 17.404 38.875 38.876 0 21.473-17.403 38.876-38.875 38.876Z"
                        />
                    </svg>{" "}
                    Mira el proyecto
                </TextureButton>
            </div>
        </div>
    </div>
)




