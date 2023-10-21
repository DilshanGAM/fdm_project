//import axios from "axios";
//import { useState } from "react";
import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/images/logo.png'
import './index.css'
import sad from '../../assets/images/sad.jpg'
import happy from '../../assets/images/happy.jpg'
import { FaAngleLeft, FaAngleRight, FaBaby, FaBackward, FaBan, FaBed, FaCalendar, FaCheckCircle, FaClock, FaCog, FaDollarSign, FaGlobe, FaHotel, FaHourglassHalf, FaMoneyCheckAlt, FaMoon, FaNetworkWired, FaRecycle, FaStar, FaSun, FaUser, FaUserCheck, FaUserFriends, FaUsers, FaUtensils } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const InputPage = () => {
    
    const pages = ["first", "second", "third", "fourth", "fifth"]
    const[currentPage, setCurrentPage] = useState(0)
    const scrollDiv = useRef(null)
    const navigate = useNavigate()
    const[status,setStatus] = useState("not set")

    useEffect(() => {
        if(useRef === null) return
        console.log(scrollDiv.current.scrollLeft)
    }, [currentPage])

    const nextPage = () => {
        //smoothly scroll scrollDiv
        if(currentPage === pages.length - 1) return
        scrollDiv.current.scrollTo(
            {
                left: scrollDiv.current.scrollLeft + scrollDiv.current.clientWidth,
                behavior: 'smooth'
            }
        )
        setCurrentPage(currentPage + 1)
    }
    const previousPage = () => {
        //smoothly scroll scrollDiv
        if(currentPage === 0) return
        scrollDiv.current.scrollTo(
            {
                left: scrollDiv.current.scrollLeft - scrollDiv.current.clientWidth,
                behavior: 'smooth'
            }
        )
        setCurrentPage(currentPage - 1)
    }
    
    
    return (
        
        <div className='h-[100vh] w-full min-h-screen relative flex justify-center items-end overflow-hidden' >
            
            <header className="w-full bg-primary min-h-[50px] top-0 max-h-[50px] z-[100] cursor-pointer flex justify-center items-center absolute">
            <img src={logo} alt="logo" className='h-[40px] absolute' onClick={()=>{
                navigate('/')
            }}/>          
        </header>
        {status==="cancelled"&&<div className='z-[150]  animate-ping-y absolute min-w-full min-h-full bg-[url(./assets/images/homepage.jpg)] bg-cover m-0 flex flex-row justify-center items-center'>
            <div className='flex items-center justify-center w-full h-[100vh] backdrop-blur-2xl'>
            <img src={sad} alt="sad" className='w-[500px] h-[500px] rounded-full'/>
                <button className='absolute right-4 top-4 text-2xl font-bold hover:text-red-700' onClick={()=>{setStatus("not set")}} >X</button>
                <span className='absolute bottom-8 text-4xl font-bold text-white'>The booking will be cancelled</span>
            </div>
            
        </div> 
        }
        {status==="not cancelled"&&<div className='z-[150] animate-ping-y absolute min-w-full min-h-full bg-[url(./assets/images/homepage.jpg)] bg-cover  m-0 flex flex-row justify-center items-center'>
            <div className='flex items-center justify-center w-full h-[100vh] backdrop-blur-2xl'>
                <img src={happy} alt="happy" className='w-[500px] h-[500px] rounded-full'/>
                <button className='absolute right-4 top-4 text-2xl font-bold hover:text-red-700' onClick={()=>{setStatus("not set")}} >X</button>
                <span className='absolute bottom-8 text-4xl font-bold text-white'>The booking will not be cancelled</span>
            </div>
        </div>
        }
        

        <div className='absolute w-[50%] h-[80vh] m-0 flex flex-row justify-center items-center'>
                <button className='absolute z-50 left-0 ' onClick={previousPage}><FaAngleLeft className='bg-white bg-opacity-20 rounded-full text-gray-300' size={60}/></button>
                <button className='absolute z-50 right-0' onClick={nextPage}><FaAngleRight className='bg-white bg-opacity-20 rounded-full text-gray-300' size={60}/></button>
            </div>
        <div className='absolute w-[50%] h-[20vh] m-0 flex flex-row justify-between items-center top-4'>
        <div className="absolute flex-start flex h-1.5 w-full overflow-hidden rounded-sm z-[10] bg-blue-950 font-sans text-xs font-medium">
                <div
                    className="flex h-full items-baseline justify-center overflow-hidden break-all bg-primary text-white"
                    style={{width : `${currentPage*33}%`}} 
                ></div>
            </div>
            <div className={`w-[45px] h-[45px] z-[20] rounded-full ${currentPage>=0?'bg-primary text-white':'border-4 border-primary text-primary bg-white'} flex justify-center items-center `}>
                <span className=' text-[25px] font-bold'>{1}</span>
            </div>
            <div className={`w-[45px] h-[45px] z-[20] rounded-full ${currentPage>=1?'bg-primary text-white':'border-4 border-primary text-primary bg-white'} flex justify-center items-center `}>
                <span className=' text-[25px] font-bold'>{2}</span>
            </div>
            <div className={`w-[45px] h-[45px] z-[20] rounded-full ${currentPage>=2?'bg-primary text-white':'border-4 border-primary text-primary bg-white'} flex justify-center items-center `}>
                <span className=' text-[25px] font-bold'>{3}</span>
            </div>
            <div className={`w-[45px] h-[45px] z-[20] rounded-full ${currentPage>=3?'bg-primary text-white':'border-4 border-primary text-primary bg-white'} flex justify-center items-center `}>
                <span className=' text-[25px] font-bold'>{4}</span>
            </div>

        </div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            //print form data
            console.log(e.target.hotel.value)
            const data = {
                hotel : e.target.hotel.value,
                lead_time : e.target.lead_time.value,
                arrival_date_month : e.target.arrival_date_month.value,
                arrival_date_week_number : e.target.arrival_date_week_number.value,
                arrival_date_day_of_month : e.target.arrival_date_day_of_month.value,
                stays_in_weekend_nights : e.target.stays_in_weekend_nights.value,
                stays_in_week_nights : e.target.stays_in_week_nights.value,
                adults : e.target.adults.value,
                children : e.target.children.value,
                babies : e.target.babies.value,
                meal : e.target.meal.value,
                country : e.target.country.value,
                market_segment : e.target.market_segment.value,
                distribution_channel : e.target.distribution_channel.value,
                is_repeated_guest : e.target.is_repeated_guest.checked,
                previous_cancellations : e.target.previous_cancellations.value,
                previous_bookings_not_canceled : e.target.previous_bookings_not_canceled.value,
                reserved_room_type : e.target.reserved_room_type.value,
                assigned_room_type : e.target.assigned_room_type.value,
                booking_changes : e.target.booking_changes.value,
                deposit_type : e.target.deposit_type.value,
                days_in_waiting_list : e.target.days_in_waiting_list.value,
                customer_type : e.target.customer_type.value,
                adr : e.target.adr.value,
                total_of_special_requests : e.target.total_of_special_requests.value
            }   
            console.log(data)  
            setStatus("loading") 
            axios.post('http://localhost:5000/predict', data).then((res)=>{
                console.log(res.data)
                if (res.data.prediction === 1){
                    
                    setStatus("cancelled")
                }else{
                    
                    setStatus("not cancelled")
                }
            }
            )

        }} className='w-[90%] flex justify-center items-center'>
            <div className='w-[60%] h-[93vh] overflow-y-scroll  flex flex-row hide-scroll' ref={scrollDiv}>
                    
                <div className='min-h-full min-w-full backdrop-blur-lg mb-1 pt-16 rounded-2xl flex flex-col justify-center items-center'>
                    <div className='flex flex-row w-[61%] relative items-center my-4 '>
                        <FaHotel className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Hotel</span>
                        <select type='text' name='hotel' placeholder='Hotel' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white' >
                            <option value="City Hotel">Hotel type</option>
                            <option value="City Hotel">City Hotel</option>
                            <option value="Resort Hotel">Resort Hotel</option>
                        </select>
                    </div>

                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaClock className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Leed Time</span>
                        <input type='number' name='lead_time' placeholder='Lead Time' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white' />
                    </div>

                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaCalendar className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Arrival Date Month</span>
                        <select type='text' name='arrival_date_month'  placeholder='Arrival Date Month' className='text-white w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white ' >
                            <option value="July">Arrival Date Month</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July" >July</option>
                            <option value="August" >August</option>
                            <option value="September" >September</option>
                            <option value="October" >October</option>
                            <option value="November" >November</option>
                            <option value="December" >December</option>
                        </select>

                    </div>

                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaCalendar className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Arrival Date Week Number</span>
                        <input type='text' name='arrival_date_week_number' placeholder='Arrival Date Week Number' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white' />
                    </div>

                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaCalendar className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Arrival Date Day of Month</span>
                        <input type='text' name='arrival_date_day_of_month' placeholder='Arrival Date Day of Month' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white' />
                    </div>


                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaSun className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Stays in Weekend Nights</span>
                        <input type='text' name='stays_in_weekend_nights' placeholder='Stays in Weekend Nights' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white' />
                    </div>

                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaMoon className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Stays in Week Nights</span>
                        <input type='text' name='stays_in_week_nights' placeholder='Stays in Week Nights' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white' />
                    </div>

                </div>
                
                <div className='min-h-full min-w-full backdrop-blur-lg pt-16 rounded-2xl flex flex-col justify-center items-center'>
                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaUser className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Adults</span>
                        <input type='number' name='adults' placeholder='Adults' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white ' />
                    </div>

                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaUserFriends className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Children</span>
                        <input type='number' name='children' placeholder='Children' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white' />
                    </div>


                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaBaby className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Babies</span>
                        <input type='number' name='babies' placeholder='Babies' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white' />
                    </div>


                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaUtensils className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Meal</span>
                        <select type='text' name='meal' placeholder='Meal' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white' >
                            <option value="BB">Meal</option>
                            <option value="BB">BB</option>
                            <option value="FB">FB</option>
                            <option value="HB">HB</option>
                            <option value="SC">SC</option>
                        </select>
                    </div>


                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaGlobe className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Country</span>
                        <select type='text' name='country' placeholder='Country' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white' >
                            <option value="PRT">Country</option>
                            <option value="PRT">PRT</option>
                            <option value="GBR">GBR</option>
                            <option value="USA">USA</option>
                            <option value="ESP">ESP</option>
                            <option value="IRL">IRL</option>
                            <option value="FRA">FRA</option>
                            <option value="DEU">DEU</option>
                            <option value="CN">CN</option>
                            <option value="NLD">NLD</option>
                            <option value="ITA">ITA</option>
                            <option value="BEL">BEL</option>
                            <option value="CHE">CHE</option>
                            <option value="BRA">BRA</option>
                            <option value="AUT">AUT</option>
                            <option value="SWE">SWE</option>
                            <option value="CHN">CHN</option>
                            <option value="POL">POL</option>
                            <option value="ISR">ISR</option>
                            <option value="RUS">RUS</option>
                            <option value="NOR">NOR</option>
                            <option value="ROU">ROU</option>
                            <option value="FIN">FIN</option>
                            <option value="DNK">DNK</option>
                            <option value="LUX">LUX</option>
                            <option value="TUR">TUR</option>
                            <option value="ARG">ARG</option>
                            <option value="AUS">AUS</option>

                        </select>
                    </div>
                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaUserFriends className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Market Segment</span>
                        <select type='text' name='market_segment' placeholder='Market Segment' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white' >
                            <option value="Online TA">Market Segment</option>
                            <option value="Online TA">Online TA</option>
                            <option value="Offline TA/TO">Offline TA/TO</option>
                            <option value="Groups">Groups</option>
                            <option value="Direct">Direct</option>
                            <option value="Corporate">Corporate</option>
                            <option value="Complementary">Complementary</option>
                            <option value="Aviation">Aviation</option>
                        </select>
                    </div>

                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaNetworkWired className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Distribution Channel</span>
                        <select type='text' name='distribution_channel' placeholder='Distribution Channel' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white' >
                            <option value="TA/TO">Distribution Channel</option>
                            <option value="TA/TO">TA/TO</option>
                            <option value="Direct">Direct</option>
                            <option value="Corporate">Corporate</option>
                            <option value="GDS">GDS</option>
                            <option value="Undefined">Undefined</option>
                        </select>
                    </div>

                    
                </div>   
                <div className='min-h-full min-w-full backdrop-blur-lg  rounded-2xl flex flex-col justify-center items-center'>

                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaUserCheck className='text-white text-2xl absolute left-4' />
                        <input type='checkbox' name='is_repeated_guest' placeholder='Is Repeated Guest' className='w-[20px] border border-white rounded-lg bg-[#00000000] text-center ml-8' />
                        <label className='text-white text-sm ml-8'>Is Repeated Guest</label>
                    </div>

                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaBan className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Previous Cancellations</span>
                        <input type='number' name='previous_cancellations'  placeholder='Previous Cancellations' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white' />
                    </div>

                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaCheckCircle className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Previous Bookings Not Canceled</span>
                        <input type='number' name='previous_bookings_not_canceled' placeholder='Previous Bookings Not Canceled' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white' />
                    </div>

                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaUsers className='text-white text-2xl absolute left-4' />
                        <select type='text' name='customer_type' placeholder='Customer Type' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white' >
                            <option value="Transient">Customer Type</option>
                            <option value="Transient">Transient</option>
                            <option value="Transient-Party">Transient-Party</option>
                            <option value="Contract">Contract</option>
                            <option value="Group">Group</option>
                        </select>
                    </div>     
                </div>
                <div className='min-h-full min-w-full backdrop-blur-lg pt-16  rounded-2xl flex flex-col justify-center items-center'>
                    
                    <div className='flex flex-row w-[61%] relative items-center my-4'>

                        <FaBed className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Reserved Room Type</span>
                        <select type='text' name='reserved_room_type' placeholder='Reserved Room Type' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white' >
                            <option value="A">Reserved Room Type</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </div>

                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaBed className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Assigned Room Type</span>
                        <select type='text' name='assigned_room_type' placeholder='Assigned Room Type' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white' >
                            <option value="A">Assigned Room Type</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </div>   
                    
                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaRecycle className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Booking Changes</span>
                        <input type='text' name='booking_changes' placeholder='Booking Changes' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white ' />
                    </div>

                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaBan className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Deposit Type</span>
                        <select type='text' name='deposit_type' placeholder='Deposit Type' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white' >
                            <option value="No Deposit">Deposit Type</option>
                            <option value="No Deposit">No Deposit</option>
                            <option value="Non Refund">Non Refund</option>
                            <option value="Refundable">Refundable</option>
                        </select>
                    </div>


                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaHourglassHalf className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Days in Waiting List</span>
                        <input type='text' name='days_in_waiting_list' placeholder='Days in Waiting List' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white' />
                    </div>

                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaDollarSign className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>ADR</span>
                        <input type='text' name='adr' placeholder='ADR' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white' />
                    </div>

                    
                    <div className='flex flex-row w-[61%] relative items-center my-4'>
                        <FaStar className='text-white text-2xl absolute left-4' />
                        <span className='text-white text-md  absolute top-[-25px] left-0'>Total of Special Requests</span>
                        <input type='text' name='total_of_special_requests' placeholder='Total of Special Requests' className='w-full border border-white rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring focus:ring-primary placeholder-white text-center text-white' />
                    </div>
                    
                    <button type='submit' className='w-[50%] h-[40px] bg-primary rounded-lg text-white font-bold'>{
                        status!=="loading"?"Predict":
                        <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    }</button>
                </div>    
            </div> 
            </form>
            
        </div>
        
    );
}
export default InputPage;
