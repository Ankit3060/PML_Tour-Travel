import React, { useEffect, useState } from 'react'
import SearchBanner from '../Components/SearchBanner'
import AttractionCard from '../Components/AttractionCard'

function Attraction() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
      const fethData = async()=>{
        try {
            const res = await fetch("https://admin.magicalvacation.com/api/v1/attractions");
            const result = await res.json();
            setData(result.data || [])
        } catch (error) {
            console.log("Failed to load the data",error);
        }
      }
      fethData()
    }, [])
    console.log(data)
    
  return (
    <div>
        <SearchBanner />
        <h1 className="text-4xl font-light ml-24 mt-5">Attractions   </h1>
        <div className='flex flex-wrap gap-7 p-12'>
            {data.map(attract=>(
                <AttractionCard key={attract.id} attract={attract} />
            ))}
        </div>
    </div>
  )
}

export default Attraction