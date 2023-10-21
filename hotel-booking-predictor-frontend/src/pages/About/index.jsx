import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

export default function AboutPage() {
    return (
        <div className="min-h-[100vh] w-full flex justify-center items-center relative">
            <div className="w-[600px] h-[600px] backdrop-blur-xl rounded flex flex-col justify-center items-center">
                <img src={logo} alt="Company Logo" className="h-[100px]" />
                <p className="text-white text-lg text-center mt-4">
                    At Staysure, we envision a world where travel is hassle-free and your reservations are in the safest hands. Our predictive expertise ensures that your journey is a delightful experience from start to finish. Let's turn your travel dreams into reality together.
                </p>
                <span className='text-white flex flex-row justify-center items-center mt-5'><FaPhone/> +9477 712 3456</span>
                <span className='text-white flex flex-row justify-center items-center mt-5'><FaLocationArrow/> Colombo, Sri Lanka</span>
                <span className='text-white flex flex-row justify-center items-center mt-5'><FaEnvelope/>contact@staysure.com</span>
            </div>
        </div>
    );
}
