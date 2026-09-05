import React from 'react'
import { motion } from "motion/react"
import Form from '../componentes/Form';
import Comentarios from '../componentes/Comentarios'
import { useEffect, useState } from "react";

const Contato = () => {

    function useIsMobile() {
            const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
    
            useEffect(() => {
                const handleResize = () => setIsMobile(window.innerWidth <= 800);
                window.addEventListener("resize", handleResize);
                return () => window.removeEventListener("resize", handleResize);
            }, []);
    
            return isMobile;
        }
    
        const isMobile = useIsMobile();

    return (
        <section className="w-full min-h-screen flex justify-center items-center flex-col pt-4 z-10" id='Contact'>

            <motion.div className="max-w-6xl mx-auto text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}>
                <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F0F0F0] tracking-wide mb-2">Contato</h1>
                <p className="text-[16px] max-[800px]:text-[14px] text-gray-300">
                    Entre em contato comigo ou deixe um comentário.
                </p>
            </motion.div>

            <div className="w-[87vw] h-auto flex flex-row  items-center mt-6 max-[800px]:flex-col max-[800px]:gap-4 ">
                <motion.div className=" flex flex-1 justify-center items-center z-10"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.4 }}>
                    <Form></Form>
                </motion.div>

                <motion.div className="flex flex-1 justify-center items-center"
                    initial={{ opacity: 0, x: isMobile ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.4 }}>
                    <Comentarios></Comentarios>
                </motion.div>

            </div>
        </section>
    );
};

export default Contato;