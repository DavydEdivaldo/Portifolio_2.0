import Eu from '/img/eu-estudio.jpeg'
import Button from '../componentes/Button.jsx'
import { motion } from "motion/react"
import { useEffect, useState } from "react";

export default function Sobre() {
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
        <div className="flex w-full min-h-screen justify-center items-center z-10 flex-col mt-6" id='About'>
            <motion.h1 className="text-[35px] max-xl:text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#f0f0f0] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}>
                SOBRE MIM
            </motion.h1>
            <div className="w-[87vw] h-auto flex flex-row justify-between items-center mt-6 max-[800px]:flex-col-reverse max-[800px]:gap-4">
                <motion.div className="flex-2 gap-2"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}>
                    <h1 className="flex flex-col">
                        <span className="text-[35px] max-xl:text-xl font-bold bg-gradient-to-r from-[#f0f0f0] to-[#6366f1] bg-clip-text text-transparent">Davyd E.</span>
                        <span className="text-[35px] max-xl:text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#f0f0f0] bg-clip-text text-transparent">Silva</span>
                    </h1>
                    <p className='margin-top-2 text-[16px] max-md:text-[14px] max-w-[75%] max-[800px]:max-w-[100%]'>
                        Formado em analise e desenvolvimento de sistemas,segui meus estudos
                        na area de web desing e UX desing, onde encontrei minha paixão por
                        criar e desenvolver soluções interativas e criativas.
                    </p>

                    <div className=' flex items-center margin-top-3'>
                        <div className='flex gap-4 flex-wrap text-[#f0f0f0]'>
                            <Button text={"Contato"} />
                            <Button text={"Projetos"} />
                        </div>
                    </div>
                </motion.div>
                <motion.div className="flex-1 z-10"
                    initial={{ opacity: 0, x: isMobile? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}>
                    <img src={Eu} alt="Foto perfil" className='w-[350px] h-[350px] max-[800px]:w-[200px] max-[800px]:h-[200px] rounded-full object-cover borda-neon' />
                </motion.div>
            </div>
        </div>
    )
}