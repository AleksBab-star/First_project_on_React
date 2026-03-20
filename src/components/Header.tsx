import {useState} from "react";
import { motion } from 'framer-motion';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="bg-[#222831] h-18.75 flex items-center justify-between px-24 max-md:px-8 max-md:justify-between max-md:items-center">
            <h1 className="font-['Oswald'] font-bold text-2xl text-white max-md:text-3xl">SaulDesign</h1>

            <ul className="font-['Poppins'] font-normal text-white text-[18px] leading-[100%] flex gap-12 items-center max-md:hidden ">
                <a href="#about">About me</a>
                <a href="#works">My works</a>
                <a href="#forms">Forms</a>
                <a href="#footer">Contacts</a>
            </ul>

            <button onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 11.5C2.5 11.2239 2.72386 11 3 11H13C13.2761 11 13.5 11.2239 13.5 11.5C13.5 11.7761 13.2761 12 13 12H3C2.72386 12 2.5 11.7761 2.5 11.5Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 7.5C2.5 7.22386 2.72386 7 3 7H13C13.2761 7 13.5 7.22386 13.5 7.5C13.5 7.77614 13.2761 8 13 8H3C2.72386 8 2.5 7.77614 2.5 7.5Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 3.5C2.5 3.22386 2.72386 3 3 3H13C13.2761 3 13.5 3.22386 13.5 3.5C13.5 3.77614 13.2761 4 13 4H3C2.72386 4 2.5 3.77614 2.5 3.5Z" fill="white    "/>
                </svg>

            </button>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4}}
                    className="absolute top-18.75 bg-[#333840] w-full left-0 flex items-center justify-center py-5">
                    <ul className="font-['Poppins'] font-normal text-white text-lg leading-[100%] flex flex-col gap-5 items-center">
                        <a href="#about">About me</a>
                        <a href="#works">My works</a>
                        <a href="#forms">Forms</a>
                        <a href="#footer">Contacts</a>
                    </ul>
                </motion.div>
            )}
        </section>
    );
}