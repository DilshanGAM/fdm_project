import { useEffect, useState } from 'react';
import {FaArrowRight} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
const HomePage = () => {
    const navigate = useNavigate();
    const moveInputPage = () => {
        navigate('/input');
    }
    const quotes = [
        {
            quote: 'With Staysure, your hotel reservations are never set in stone; they\'re carved in prediction.'
        },
        {
            quote: 'Cancel with confidence and book anew, for Staysure sees what\'s best for you.'
        },
        {
            quote: 'Reserve your stay with a worry-free heart, thanks to Staysure\'s predictive art.'
        },
        {
            quote: 'Predicting cancellations before they even happen, that\'s the magic of Staysure.'
        },
        {
            quote: 'Staysure - where the future of reservations meets the certainty of predictions.'
        },
        {
            quote: 'Like a crystal ball for hotel reservations, Staysure foresees your needs.'
        },
        {
            quote: 'With Staysure, your reservations are as flexible as your travel dreams.'
        },
        {
            quote: 'Staysure: making reservation changes a breeze, one prediction at a time.'
        },
        {
            quote: 'Staysure doesn\'t just book rooms; we shape the future of your stays.'
        },
        {
            quote: 'Don\'t leave your reservations to chance; trust Staysure\'s predictive dance.'
        },
        {
            quote: 'At Staysure, your reservations are in the safest hands—those of prediction.'
        },
        {
            quote: 'Let Staysure be your guide in the ever-changing landscape of reservations.'
        },
        {
            quote: 'Staysure\'s crystal-clear predictions keep your hotel stays worry-free.'
        },
        {
            quote: 'Predicting reservations is our passion, making your stay a delight is our mission.'
        },
        {
            quote: 'Staysure - where uncertainty checks out, and your reservations check-in.'
        },
        {
            quote: 'At Staysure, we don\'t predict the weather, but we can forecast reservation changes.'
        },
        {
            quote: 'Reserve your trust in Staysure; we\'ll handle the rest, including predictions.'
        },
        {
            quote: 'Staysure\'s crystal ball sees cancellations, but we turn them into opportunities.'
        },
        {
            quote: 'Book with Staysure, and we\'ll predict the perfect path for your reservations.'
        },
        {
            quote: 'With Staysure, hotel reservations are like the weather forecast: clear and reliable.'
        },
        {
            quote: 'Staysure - making the uncertain world of reservations as predictable as day and night.'
        },
        {
            quote: 'Trust in Staysure\'s predictive power to make your reservations a breeze.'
        },
    ];
    
    const [qNo, setQNo] = useState(1);
    useEffect(() => {
        const interval = setTimeout(() => {
            if(qNo<quotes.length-1)
                setQNo(qNo+1);
            else
                setQNo(0);
        }, 3000);
        return () => clearInterval(interval);
    }, [qNo]);

    
    return (
        <div className="min-h-[100vh] w-full flex justify-center relative">
            <div className='absolute top-[7vh] left-0 w-full h-[93vh] flex   z-0'>
                <div className='w-full h-full relative flex justify-center items-center'>
                    {qNo%5===0&&
                    <div className='absolute font-extrabold bg-[#FFFFFF26] text-gray-900 text-[50px] w-[50%] h-[50%] flex justify-center text-right items-center right-0 bottom-0 fade-in'>
                        {quotes[qNo].quote}
                    </div>
                    }
                    {qNo%5===3&&
                    <div className='absolute font-extrabold bg-[#FFFFFF26] text-gray-900 text-[50px] w-[50%] h-[50%] flex justify-center text-left items-center left-0 top-0 fade-in'>
                        {quotes[qNo].quote}
                    </div>}
                    {qNo%5===2&&
                    <div className='absolute font-extrabold bg-[#FFFFFF26] text-gray-900 text-[50px] w-[50%] h-[50%] flex justify-center text-right items-center right-0 top-0 fade-in'>
                        {quotes[qNo].quote}
                    </div>}
                    {qNo%5===1&&
                    <div className='absolute font-extrabold bg-[#FFFFFF26] text-gray-900 text-[50px] w-[50%] h-[50%] flex justify-center text-left items-center left-0 bottom-0 fade-in'>
                        {quotes[qNo].quote}
                    </div>}
                    {qNo%5===4&&
                    <div className='absolute font-extrabold bg-[#FFFFFF26] text-gray-900 text-[50px] w-[50%] h-[50%] flex justify-center text-right items-center  fade-in'>
                        {quotes[qNo].quote}
                    </div>}


                </div>
                
            </div>
            <button onClick={moveInputPage} className='absolute bottom-28 flex flex-row items-center text-center justify-center text-white bg-primary w-[170px] h-[40px] rounded-full shadow-primary shadow-2xl'>
                <span className=' text-lg font-bold'>
                    Lets predict
                </span>
                <FaArrowRight className='ml-4 flex items-center justify-center'/>
            </button>        
        </div>
    );
}
export default HomePage;