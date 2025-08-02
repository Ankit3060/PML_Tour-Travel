import React, { useEffect, useState } from 'react'
import SearchBanner from '../Components/SearchBanner'
import AttractionCard from '../Components/AttractionCard'
import LandComboCard from '../Components/LandComboCard';

function LandCombo() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
      const fethData = async()=>{
        try {
            const res = await fetch("https://admin.magicalvacation.com/api/v1/land_combos");
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
        <SearchBanner title="Land Combos for you!" buttonText={true} searchBar={true}/>
        <h1 className="text-4xl font-light ml-24 mt-5">Trending   </h1>
        <div className='flex flex-wrap gap-7 p-12'>
            {data.map(attract=>(
                <LandComboCard key={attract.id} attract={attract} />
            ))}
        </div>
    </div>
  )
}

export default LandCombo