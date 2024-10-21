"use client";

import VisitAnalysisChart from "../components/VisitAnalysisChart";
import { useQuery } from "@tanstack/react-query";

async function fetchTrends() {
  const res = await fetch(
    "https://my.api.mockaroo.com/visits-trend?key=2c530ee0"
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default function DetailedVisitAnalysis() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["trends"],
    queryFn: fetchTrends,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const sortedData = data.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Website Visit Trends</h1>
      <VisitAnalysisChart data={sortedData} />
    </div>
  );
}
