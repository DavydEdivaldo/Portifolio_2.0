import Spline from '../componentes/SplineScene';
import {CgScrollV} from "react-icons/cg"
import { motion } from "motion/react"

export default function Main() {
    return (
        <section className="relative w-full min-h-screen justify-center items-center overflow-hidden" id='Home'>
            <Spline/> 

            <div className='relative z-10 flex min-h-screen items-center justify-center'>
                <h1 className='font-bold text-4xl sm:text-5xl lg:text-6xl text-[#F0F0F0] tracking-wide'>DAVYD E. SILVA</h1>
            </div>

            <div className='absolute bottom-0 left-[50%] animate-bounce'>
                <h3 className='text-purple-500 text-4xl'>
                    <CgScrollV/>
                </h3>
            </div>
        </section >

    );
}