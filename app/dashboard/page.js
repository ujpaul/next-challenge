import CustomerList from "../components/CustomerList";
// Fetch data directly in the component
export default async function LandingPage() {
  // Fetch the data from the Mockaroo API
  const res = await fetch(
    "https://my.api.mockaroo.com/website-visits?key=2c530ee0"
  );
  const data = await res.json();

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
      <h1 className='text-2xl font-bold mb-4'>Website Overview</h1>
      <div className='grid grid-cols-3 gap-4'>
        <div className='bg-blue-100 p-4'>
          <h2 className='text-lg font-semibold'>Total Visitors</h2>
          <p>{totalVisitors}</p>
        </div>
        <div className='bg-green-100 p-4'>
          <h2 className='text-lg font-semibold'>Bounce Rate</h2>
          <p>{avgBounceRate}%</p>
        </div>
        <div className='bg-yellow-100 p-4'>
          <h2 className='text-lg font-semibold'>Avg. Session Duration</h2>
          <p>{avgSessionDuration} minutes</p>
        </div>
      </div>
      <CustomerList />
    </div>
  );
}
