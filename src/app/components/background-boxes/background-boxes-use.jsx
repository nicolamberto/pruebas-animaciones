"use client";
import React from "react";
import { Boxes } from "./background-boxes";
import { cn } from "@/app/lib/utils";

import bghero from '@/app/lib/imagenes/bghero.jpg';
import bannerhero from '@/app/lib/imagenes/bannerhero.png';

import Image from "next/image";
import ButtonHover from "../elements/button-hover/button-hover";
import ButtonWrapper from "../elements/button-hover/button-hover";

export function BackgroundBoxesUse() {
    return (
        <div className=" h-[85vh] relative w-full overflow-hidden bg-slate-900 flex items-center justify-center rounded-lg ">

            <div className="absolute inset-0 z-10">
                <Boxes />
            </div>

            <div className="flex flex-row justify-around items-center w-[60%]">

                <div className="flex justify-center items-start flex-col gap-5 relative z-10 w-[60%]">
                    <h1 className={cn("md:text-4xl text-xl text-white relative font-extrabold ")}>
                        DISEÑAMOS MARCAS Y CREAMOS WEBS QUE CONECTAN
                    </h1>
                    <p className="text-center text-neutral-300 relative ">
                        Diseno web a medida para marcas que quieren destacarse.
                    </p>
                    <div className="w-[300px] text-start">
                        <button className=" px-10 py-2 rounded-full border border-indigo-600 bg-indigo-900 text-indigo-300 font-semibold cursor-pointer hover:bg-indigo-300 hover:text-indigo-900 transition">
                            TRABAJA CON NOSOTROS
                        </button>
                    </div>
                </div>

                <div className="z-20 w-[50%]">
                    <Image
                        src={bannerhero}
                        className="z-50"
                    />
                </div>

            </div>


            <Image
                src={bghero}
                alt="Background Image"
                className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80" // Imagen detrás de todo

            />
        </div>
    );
}
