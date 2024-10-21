// app/components/VisitAnalysisChart.js
"use client"; // For client-side rendering of charts

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function VisitAnalysisChart({ data }) {
  // Extract dates and values for the chart
  const dates = data.map((item) => item.date);
  const pageViews = data.map((item) => item.pageViews);
  const uniqueVisitors = data.map((item) => item.uniqueVisitors);

  // Prepare the chart data
  const chartData = {
    labels: dates, // X-axis (Dates)
    datasets: [
      {
        label: "Page Views",
        data: pageViews, // Y-axis (Page Views)
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.3, // For smoother curves
      },
      {
        label: "Unique Visitors",
        data: uniqueVisitors, // Y-axis (Unique Visitors)
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
        tension: 0.3, // For smoother curves
      },
    ],
  };

  // Return the chart
  return <Line data={chartData} />;
}
