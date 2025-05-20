'use client'

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react'

import PricingContent from './contents/pricing-content';
import AboutUsContent from './contents/about-us-content';

export default function NavBarDropdown() {
    return (
        <div className='w-full h-20 bg-gray-700 sticky top-0 z-20 flex gap-10 justify-center items-center font-semibold'>
            <FlyoutLink href={'/'} FlyoutContent={AboutUsContent} >
                <p className='text-white'>Sobre Nosotros</p>
            </FlyoutLink>
            <FlyoutLink href={'/'} FlyoutContent={PricingContent} >
                <p className='text-white'>Precios</p>
            </FlyoutLink>
            <FlyoutLink href={'/'} FlyoutContent={PricingContent2} >
                <p className='text-white'>Contacto</p>
            </FlyoutLink>
        </div>
    )

}


const FlyoutLink = ({ children, href, FlyoutContent }) => {

    const [open, setOpen] = useState(false);

    const showFlyout = FlyoutContent && open;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className='relative w-fit h-fit'
        >
            <Link
                href={href}
                className='relative'
            >
                {children}
                <span
                    style={{
                        transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
                    }}
                    className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left  rounded-full bg-white transition-transform duration-300 ease-out z-30'
                />
            </Link>
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ translateX: "-50%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className='absolute left-1/2 top-12 bg-white text-black'
                    >
                        <div className="absolute -top-6 left-0 right-0 h-10 bg-transparent" />
                        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                        <FlyoutContent />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )

}




const PricingContent2 = () => {
    return (
        <div className="w-64 bg-white p-6 shadow-xl">
            <div className="mb-3 space-y-3">
                <h3 className="font-semibold">For Individuals</h3>
                <a href="#" className="block text-sm hover:underline">
                    Introduction
                </a>
                <a href="#" className="block text-sm hover:underline">
                    Pay as you go
                </a>
            </div>
            <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
                Contact sales
            </button>
        </div>
    );
};

