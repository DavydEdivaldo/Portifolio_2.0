import projeto1 from '/img/projeto-nubank.png'
import projeto2 from '/img/cardapio-digital.png'
import projetoPortifolio from '/img/portifolio.png'
import landingPage from '/img/webPage.jpeg'
import { motion } from "motion/react"
import { useEffect, useState } from "react";

export default function Portifolio() {
    const projects = [
        {
            title: "Web site Nubank",
            description: "Redesing do web site Nubank.",
            image: projeto1,
            link: "https://web-site-nubank.vercel.app/"
        },
        {
            title: "Cardápio Digital",
            description: "Cardápio digital para deliveries.",
            image: projeto2,
            link: "https://cardapio-digital-nu.vercel.app/"
        },
        {
            title: "Blog",
            description: "Blog pessoal para publicações diversas.",
            image: "https://via.placeholder.com/300x200",
            link: "#"
        },
        {
            title: "Portfolio Moderno",
            description: "Design responsivo e interativo com Tailwind CSS.",
            image: projetoPortifolio,
            link: "#"
        },
        {
            title: "Catálogo Digital",
            description: "Catálogo online para empresas do setor têxtil.",
            image: "https://via.placeholder.com/300x200",
            link: "#"
        },
        {
            title: "Landing Page",
            description: "Landing Page para conversão.",
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
                viewport={{ once: false, amount: 0.3 }}>
                <h1 className="text-[35px] max-xl:text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#f0f0f0] bg-clip-text text-transparent mb-2">Portfolio</h1>
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
                                once: false
                                , amount: 0.4
                            }}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-5">
                                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                                <a
                                    href={project.link}
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