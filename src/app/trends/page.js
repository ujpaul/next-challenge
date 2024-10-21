"use client";

import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
<h1 className='text-2xl font-bold mb-4'>Website Visit Trends</h1>
import VisitAnalysisChart from "../components/VisitAnalysisChart";
import { useQuery } from "@tanstack/react-query";

export default function Trends(){
// async function fetchTrends() {
//   const res = await fetch(
//     "https://my.api.mockaroo.com/visits-trend?key=2c530ee0"
//   );
//   if (!res.ok) throw new Error("Failed to fetch data");
//   return res.json();
// }

// export default function DetailedVisitAnalysis() {
//   const { data:visits, error, isLoading } = useQuery({
//     queryKey: ["trends"],
//     queryFn: fetchTrends,
//     staleTime: 1000 * 60 * 5,
//   });

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

const data = [{
  "date": "2024-10-14",
  "pageViews": 57,
  "uniqueVisitors": 98,
  "bounceRate": 43,
  "sessionDuration": 30
}, {
  "date": "2024-10-01",
  "pageViews": 94,
  "uniqueVisitors": 67,
  "bounceRate": 26,
  "sessionDuration": 89
}, {
  "date": "2024-10-24",
  "pageViews": 77,
  "uniqueVisitors": 59,
  "bounceRate": 33,
  "sessionDuration": 15
}, {
  "date": "2024-10-17",
  "pageViews": 2,
  "uniqueVisitors": 22,
  "bounceRate": 79,
  "sessionDuration": 50
}, {
  "date": "2024-10-30",
  "pageViews": 7,
  "uniqueVisitors": 28,
  "bounceRate": 47,
  "sessionDuration": 61
}, {
  "date": "2024-10-28",
  "pageViews": 95,
  "uniqueVisitors": 59,
  "bounceRate": 96,
  "sessionDuration": 5
}, {
  "date": "2024-10-23",
  "pageViews": 14,
  "uniqueVisitors": 27,
  "bounceRate": 33,
  "sessionDuration": 16
}, {
  "date": "2024-10-15",
  "pageViews": 3,
  "uniqueVisitors": 46,
  "bounceRate": 89,
  "sessionDuration": 32
}, {
  "date": "2024-10-24",
  "pageViews": 47,
  "uniqueVisitors": 24,
  "bounceRate": 57,
  "sessionDuration": 94
}, {
  "date": "2024-10-23",
  "pageViews": 9,
  "uniqueVisitors": 49,
  "bounceRate": 37,
  "sessionDuration": 90
}, {
  "date": "2024-10-17",
  "pageViews": 93,
  "uniqueVisitors": 96,
  "bounceRate": 82,
  "sessionDuration": 26
}, {
  "date": "2024-10-17",
  "pageViews": 8,
  "uniqueVisitors": 82,
  "bounceRate": 58,
  "sessionDuration": 30
}, {
  "date": "2024-10-16",
  "pageViews": 93,
  "uniqueVisitors": 45,
  "bounceRate": 45,
  "sessionDuration": 52
}, {
  "date": "2024-10-11",
  "pageViews": 66,
  "uniqueVisitors": 32,
  "bounceRate": 35,
  "sessionDuration": 90
}, {
  "date": "2024-10-27",
  "pageViews": 100,
  "uniqueVisitors": 31,
  "bounceRate": 80,
  "sessionDuration": 73
}, {
  "date": "2024-10-20",
  "pageViews": 25,
  "uniqueVisitors": 57,
  "bounceRate": 82,
  "sessionDuration": 97
}, {
  "date": "2024-10-29",
  "pageViews": 90,
  "uniqueVisitors": 43,
  "bounceRate": 9,
  "sessionDuration": 57
}, {
  "date": "2024-10-13",
  "pageViews": 15,
  "uniqueVisitors": 89,
  "bounceRate": 10,
  "sessionDuration": 56
}, {
  "date": "2024-10-10",
  "pageViews": 52,
  "uniqueVisitors": 69,
  "bounceRate": 89,
  "sessionDuration": 44
}, {
  "date": "2024-10-09",
  "pageViews": 93,
  "uniqueVisitors": 21,
  "bounceRate": 64,
  "sessionDuration": 70
}, {
  "date": "2024-10-28",
  "pageViews": 87,
  "uniqueVisitors": 20,
  "bounceRate": 31,
  "sessionDuration": 17
}, {
  "date": "2024-10-06",
  "pageViews": 76,
  "uniqueVisitors": 74,
  "bounceRate": 40,
  "sessionDuration": 80
}, {
  "date": "2024-10-18",
  "pageViews": 67,
  "uniqueVisitors": 26,
  "bounceRate": 22,
  "sessionDuration": 72
}, {
  "date": "2024-10-31",
  "pageViews": 35,
  "uniqueVisitors": 53,
  "bounceRate": 22,
  "sessionDuration": 51
}, {
  "date": "2024-10-27",
  "pageViews": 18,
  "uniqueVisitors": 100,
  "bounceRate": 85,
  "sessionDuration": 35
}, {
  "date": "2024-10-14",
  "pageViews": 26,
  "uniqueVisitors": 83,
  "bounceRate": 59,
  "sessionDuration": 80
}, {
  "date": "2024-10-10",
  "pageViews": 30,
  "uniqueVisitors": 10,
  "bounceRate": 59,
  "sessionDuration": 69
}, {
  "date": "2024-10-22",
  "pageViews": 61,
  "uniqueVisitors": 31,
  "bounceRate": 76,
  "sessionDuration": 72
}, {
  "date": "2024-10-13",
  "pageViews": 46,
  "uniqueVisitors": 82,
  "bounceRate": 46,
  "sessionDuration": 57
}, {
  "date": "2024-10-22",
  "pageViews": 77,
  "uniqueVisitors": 73,
  "bounceRate": 42,
  "sessionDuration": 14
}]

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
