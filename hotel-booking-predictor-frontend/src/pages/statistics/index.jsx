import { useEffect, useState } from "react";

const statistics = [
    {
        name : "Hotel type",
        image : "https://firebasestorage.googleapis.com/v0/b/offer-me-f2528.appspot.com/o/hotel.png?alt=media&token=c8f8a105-f61b-4da2-8ae5-9a065fcc7ecd",

    },
    {
        name:"Leed time",
        image : "https://firebasestorage.googleapis.com/v0/b/offer-me-f2528.appspot.com/o/leed%20time.png?alt=media&token=1c48994e-f6bc-4103-8509-168a4d1de68b"
    },
    {
        name:"Month chart",
        image: "https://firebasestorage.googleapis.com/v0/b/offer-me-f2528.appspot.com/o/month.png?alt=media&token=bd963ebb-d415-4f08-806e-149348ab05a4"
    }
]


export default function StatisticsPage(){
    const [selected,setSelected] = useState(0);
    useEffect(()=>{
    
    }
    ,[selected])
    return(
        <div className="min-h-[100vh] w-full flex flex-col justify-end items-center relative">
            <div className="w-[600px] h-[600px] backdrop-blur-xl rounded flex flex-col justify-center items-center">
                <img src={statistics[selected].image} alt="Company Logo" className="w-[90%] h-[90%]" />
            </div>
            <div className="bottom-0 h-[80px] flex flex-row justify-center  items-center z-[100]">
                    {statistics.map((stat,index)=>(
                        <div key={index} className={`${selected!==index?"bg-primary text-white":"bg-white text-primary"} rounded-full p-2 h-[40px] flex flex-col justify-center items-center flex-wrap cursor-pointer`} onClick={()=>{
                            setSelected(index);
                        }}>
                            <span className="font-semibold text-sm">{stat.name}</span>
                        </div>
                    ))}
            </div>
        </div>
    );
}