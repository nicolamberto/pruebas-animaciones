import Link from 'next/link';
import React from 'react'

const AboutUsContent = () => {
    return (
       <div className="w-64 bg-white p-6 shadow-xl">
            <div className="mb-3 space-y-3">
                <h3 className="font-semibold">Para Particulares</h3>
                <a href="#" className="block text-sm hover:underline">
                    Introduccion
                </a>
                <a href="#" className="block text-sm hover:underline">
                    Paga como quieras
                </a>
            </div>
            <div className="mb-6 space-y-3">
                <h3 className="font-semibold">Para Empresas</h3>
                <a href="#" className="block text-sm hover:underline">
                    Startups
                </a>
                <a href="#" className="block text-sm hover:underline">
                    PyMES
                </a>
                <a href="#" className="block text-sm hover:underline">
                    Empresas
                </a>
            </div>
            <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
                Contact sales
            </button>
        </div>
    );
};

export default AboutUsContent;