import { signOut } from "next-auth/react";
import CustomerList from "./CustomerList";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Tooltip } from "react-tooltip";
import Link from "next/link";
// Fetch data directly in the component
export default function Dashboard() {
  // Fetch the data from the Mockaroo API
  // async function fetchCustomers() {
  //   const res = await fetch(
  //     "https://my.api.mockaroo.com/website-visits?key=2c530ee0"
  //   );
  //   if (!res.ok) console.log("Failed to fetch data");
  //   return res.json();
  // }

  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["customers"],
  //   queryFn: fetchCustomers,
  //   staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
  // });
  const data = [
    {
      pageViews: 78,
      uniqueVisitors: 38,
      bounceRate: 82,
      sessionDuration: 94,
    },
    {
      pageViews: 100,
      uniqueVisitors: 96,
      bounceRate: 92,
      sessionDuration: 17,
    },
    {
      pageViews: 91,
      uniqueVisitors: 33,
      bounceRate: 46,
      sessionDuration: 14,
    },
    {
      pageViews: 72,
      uniqueVisitors: 77,
      bounceRate: 45,
      sessionDuration: 67,
    },
    {
      pageViews: 2,
      uniqueVisitors: 13,
      bounceRate: 55,
      sessionDuration: 58,
    },
    {
      pageViews: 26,
      uniqueVisitors: 31,
      bounceRate: 40,
      sessionDuration: 71,
    },
    {
      pageViews: 5,
      uniqueVisitors: 40,
      bounceRate: 22,
      sessionDuration: 57,
    },
    {
      pageViews: 9,
      uniqueVisitors: 29,
      bounceRate: 12,
      sessionDuration: 19,
    },
    {
      pageViews: 17,
      uniqueVisitors: 43,
      bounceRate: 52,
      sessionDuration: 17,
    },
    {
      pageViews: 80,
      uniqueVisitors: 55,
      bounceRate: 12,
      sessionDuration: 89,
    },
    {
      pageViews: 6,
      uniqueVisitors: 11,
      bounceRate: 80,
      sessionDuration: 34,
    },
  ];
  // Aggregate the data (assuming it has the same structure as in the previous example)
  const totalVisitors = data.reduce((sum, day) => sum + day.uniqueVisitors, 0);
  const avgBounceRate = (
    data.reduce((sum, day) => sum + day.bounceRate, 0) / data.length
  ).toFixed(2);
  const avgSessionDuration = (
    data.reduce((sum, day) => sum + day.sessionDuration, 0) / data.length
  ).toFixed(2);

  return (
    <div className='p-4'>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold mb-4'>Website Overview</h1>
        <button
          onClick={() => signOut()}
          className='cursor-pointer'
          data-tooltip-id='logout-tooltip'
          data-tooltip-content='Logout'
        >
          <RiLogoutCircleLine />
        </button>
        <Tooltip id='logout-tooltip' />
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <Link href='/trends'>
          <div
            className='bg-[#4bc0c0] p-4 cursor-pointer'
            data-tooltip-id='my-tooltip'
            data-tooltip-content='click to view details page'
          >
            <h2 className='text-lg font-semibold text-white'>Total Visitors</h2>
            <p className='text-white'>{totalVisitors}</p>
          </div>
          <Tooltip id='my-tooltip' />
        </Link>
        <Link href='/trends'>
          <div
            className='bg-green-400 p-4 cursor-pointer'
            data-tooltip-id='my-tooltip'
            data-tooltip-content='click to view details page'
          >
            <h2 className='text-lg font-semibold text-white'>Bounce Rate</h2>
            <p className='text-white'>{avgBounceRate}%</p>
          </div>
          <Tooltip id='my-tooltip' />
        </Link>
        <div className='bg-[#ff6384] p-4'>
          <h2 className='text-lg font-semibold text-white'>
            Avg. Session Duration
          </h2>
          <p className='text-white'>{avgSessionDuration} minutes</p>
        </div>
      </div>
      <CustomerList />
    </div>
  );
}
