import projeto1 from '/img/projeto-nubank.png'
import projeto2 from '../../public/img/pagina-dk.png'
import spiderpng from '/img/spider.png'
import projetoPortifolio from '/img/portifolio.png'
import landingPage from '/img/webPage.jpeg'
import catalogo from '/img/catalogo.png'
import { motion } from "motion/react"
import { useEffect, useState } from "react";

export default function Portifolio() {
    const projects = [
        {
            title: "Web site Nubank",
            description: "Interface inspirada no Nubank desenvolvida com React, explorando animações modernas com Framer Motion e efeitos visuais em SVG para criar uma experiência fluida e dinâmica. O projeto destaca transições suaves, interatividade e um design minimalista inspirado na identidade visual da fintech",
            image: projeto1,
            link: "https://web-site-nubank.vercel.app/"
        },
        {
            title: "Landing Page B2B",
            description: "Uma landing page de alta conversão focada no mercado de atacado. Desenvolvida com React e Tailwind CSS, a interface utiliza um design moderno e minimalista para destacar os produtos, transmitir credibilidade logística e captar leads qualificados de lojistas diretamente para o WhatsApp.",
            image: projeto2,
            link: "https://lojista.dkconfeccoes.com.br"
        },
        {
            title: "Home Page Spider-Man",
            description: "Home page temática do Spider-Man criada com HTML, CSS e JavaScript, explorando efeitos visuais, transições suaves e slideshow interativo de background para proporcionar uma experiência imersiva inspirada nos jogos e filmes do herói.",
            image: spiderpng,
            link: "https://davydedivaldo.github.io/page-spider/"
        },
        {
            title: "Portfolio",
            description: "Portfólio moderno desenvolvido com React e Firebase, combinando design interativo e funcionalidades dinâmicas. O projeto inclui sistema de comentários integrado com Firebase, permitindo interação em tempo real entre visitantes, além de deploy online para acesso rápido e responsivo em diferentes dispositivos.",
            image: projetoPortifolio,
            link: "https://davyd-8f4e4.web.app/"
        },
        {
            title: "Catálogo Digital",
            description: "",
            image: catalogo,
            link: "https://catalogodkconfeccoes.vercel.app/"
        },
        {
            title: "Landing Page",
            description: "Landing page, desenvolvida com HTML, CSS e JavaScript. O projeto apresenta uma interface moderna com animações visuais e design responsivo focado em experiência do usuário.",
            image: landingPage,
            link: "#"
        }
    ];

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
        <section className="flex w-full min-h-screen justify-center items-center z-10 flex-col mt-6 text-white py-16 px-4" id='Portofolio'>
            <motion.div className="max-w-6xl mx-auto text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}>
                <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F0F0F0] tracking-wide mb-2">Portfolio</h1>
                <p className="text-[16px] max-[800px]:text-[14px] text-gray-300">
                    Explore meus projetos e criações desenvolvidos com tecnologias modernas.
                </p>
            </motion.div>
            <div className="w-[87vw] h-auto">

                <div className="w-[87vw] grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#1c1b29]/70 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] hover:shadow-xl transition-transform duration-300"
                            initial={{ opacity: 0, x: isMobile ? -200 : index === 0 ? 300 : index === 2 ? -300 : index === 3 ? 300 : index === 5 ? -300 : 0, y: isMobile ? 0 : index === 0 ? 50 : index === 2 ? 50 : index === 1 ? 50 : index === 4 ? -50 : 0 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeInOut', delay: index * 0.15 }}
                            viewport={{
                                once: true
                                , amount: 0.4
                            }}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-5">
                                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    target='_blank'
                                    className="inline-block text-blue-400 hover:text-blue-300 font-medium"
                                >
                                    Ver Projeto →
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}