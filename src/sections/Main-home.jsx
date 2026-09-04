import Spline from '../componentes/SplineScene';
import { CgScrollV } from "react-icons/cg"
import Davydsvg from '../../public/svg/davyd.svg'
import heroMobile from '../../public/video/globo.mp4'
import { useEffect, useState, useRef } from 'react';
import { video } from 'motion/react-client';


export default function Main() {

    const containerRef = useRef(null);
    const splineAppRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        },
        {
            threshold: 0,
            rootMargin: '200px'
        }
        );

        if(containerRef.current){
            observer.observe(containerRef.current);
        }

        return()=>{
            if(containerRef.current){
                observer.unobserve(containerRef.current);
            }
        };

    }, []);

    useEffect(()=>{
        if(splineAppRef.current){
            if(isVisible){
                splineAppRef.current.play();
            } else{
                splineAppRef.current.stop();
            }
        }
    }, [isVisible])

    const handleLoad = (splineApp) =>{
        splineAppRef.current = splineApp;
    }

     function isMobile() {
         const [isMobile, setIsMobile] = useState(false);

         useEffect(() => {
             // Função para verificar a largura da tela
             const handleResize = () => {
                 setIsMobile(window.innerWidth < 768);
             };
             handleResize();
             // Fica "ouvindo" caso o usuário mude o tamanho da janela
             window.addEventListener('resize', handleResize);

            // Limpeza de memória
             return () => window.removeEventListener('resize', handleResize);
         }, []);
        }

    return (
        <section className="relative w-full min-h-screen justify-center items-center overflow-hidden" id='Home'>
            
            {isMobile ? (
                    <video
                    src={heroMobile}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className='absolute w-full min-h-screen object-cover mix-blend-screen inset-0 -z-0'
                    />
                ) : (
                    <Spline onLoad={handleLoad}/>
                )
                } 
            <div className='relative z-10 flex min-h-screen items-center justify-center'>
                <img src={Davydsvg} alt="Logo tipo" />
            </div>

            <div className='absolute bottom-0 left-[50%] animate-bounce'>
                <h3 className='text-purple-500 text-4xl'>
                    <CgScrollV />
                </h3>
            </div>
        </section >

    );
}