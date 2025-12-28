import main from '/svg/main.svg'
import Button from '../componentes/Button.jsx'
import { motion } from "motion/react"

export default function Main() {
    return (
        <main className="flex w-full min-h-screen justify-center items-center z-10" id='Home'>
            <motion.div className="w-[87vw] h-auto flex flex-row max-[800px]:flex-col justify-between items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}>
                    
            <div className="flex-1 gap-2">
                <h1 className="flex flex-col">
                    <span className="text-[35px] max-xl:text-xl font-bold bg-gradient-to-r from-[#f0f0f0] to-[#6366f1] bg-clip-text text-transparent">FRONTEND</span>
                    <span className="text-[35px] max-xl:text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#f0f0f0] bg-clip-text text-transparent">DEVELOP</span>
                </h1>
                <p className='margin-top-2 text-[16px] max-md:text-[14px]'>
                    Transformando código em experiências visuais. Sou um desenvolvedor Front-end apaixonado por construir interfaces que conectam pessoas e marcas.
                </p>

                <div className=' flex items-center margin-top-3'>
                    <div className='flex gap-4 flex-wrap text-[#f0f0f0]'>
                        <Button text={"React"} />
                        <Button text={"JavaScript"} />
                        <Button text={"HTML"} />
                        <Button text={"CSS"} />
                    </div>
                </div>
            </div>
            <div className="flex-1 z-10 main-svg">
                <img className='max-[800px]:max-w-[400px] max-[800px]:w-full max-[800px]:h-auto max-[800px]:mx-auto' src={main} alt="computador e icones flutuando" />
            </div>
        </motion.div>
        </main >

    );
}