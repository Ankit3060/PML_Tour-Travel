import React, { useEffect, useState } from 'react'
import SearchBanner from '../Components/SearchBanner'
import LandComboCard from '../Components/LandComboCard';
import HashLoader from 'react-spinners/HashLoader'

function LandCombo() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      const fetchData = async()=>{
        try {
            setLoading(true);
            const res = await fetch("https://admin.magicalvacation.com/api/v1/land_combos");
            const result = await res.json();
            setData(result.data || [])
        } catch (error) {
            console.log("Failed to load the data",error);
        } finally {
            setLoading(false);
        }
      }
      fetchData()
    }, [])
    // console.log(data)

  if (loading) {
    return (
      <div className="min-h-screen bg-[rgb(214, 228, 239)] flex items-center justify-center">
          <div className="text-center">
            <HashLoader color="#2990d0" />
          </div>
      </div>
    );
  }
    
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