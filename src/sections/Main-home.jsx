import Spline from '../componentes/SplineScene';
import {CgScrollV} from "react-icons/cg"
import Davydsvg from '../../public/svg/davyd.svg'


export default function Main() {
    return (
        <section className="relative w-full min-h-screen justify-center items-center overflow-hidden" id='Home'>
            <Spline/> 

            <div className='relative z-10 flex min-h-screen items-center justify-center'>
                <img src={Davydsvg} alt="Logo tipo" />
            </div>

            <div className='absolute bottom-0 left-[50%] animate-bounce'>
                <h3 className='text-purple-500 text-4xl'>
                    <CgScrollV/>
                </h3>
            </div>
        </section >
 
    );
}
