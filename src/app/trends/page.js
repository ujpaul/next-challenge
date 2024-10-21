"use client";

import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
<h1 className='text-2xl font-bold mb-4'>Website Visit Trends</h1>
import VisitAnalysisChart from "../components/VisitAnalysisChart";
import { useQuery } from "@tanstack/react-query";

export default function Trends(){
async function fetchTrends() {
  const res = await fetch(
    "https://my.api.mockaroo.com/visits-trend?key=2c530ee0"
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

  const { data, error, isLoading } = useQuery({
    queryKey: ["trends"],
    queryFn: fetchTrends,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return (
    <div className='flex justify-center items-center h-screen'>
      <h3>Loading...</h3>
    </div>
  );
  if (error) return (
    <div className='flex justify-center items-center h-screen'>
      <h3>Error: {error.message}</h3>
    </div>
  );


  const sortedData = data.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className='p-4'>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold mb-4'>Website Visit Trends</h1>
        <Link href='/'>
          {" "}
          <button
            type='button'
            className='flex justify-center mb-2 w-[100px] h-[40px] bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition duration-200 mr-2 pr-2'
          >
            <IoIosArrowRoundBack className='mt-[-3px] mr-1 text-2xl font-bold' />{" "}
            <span className='mt-[-3px]'>Back</span>
          </button>
        </Link>
      </div>
      <VisitAnalysisChart data={sortedData} />
    </div>
  );
}
