
import React, { useEffect, useState } from "react";
import axios from "axios";

const SummaryCard = () => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    async function getdata() {
      try {
       const response = await axios.get(
  `${import.meta.env.VITE_API_URL}/api/dashboard/summary`
);

        setSummary(response.data.summary);
      } catch (error) {
        console.error("Error fetching summary:", error);
      }
    }

    getdata();
  }, []);

  // Convert the summary object into an array of cards
  const cards = summary
    ? [
        {
          title: "Total Revenue",
          value: `₹${summary.totalRevenue.toLocaleString("en-IN")}`,
          description: "Revenue from completed orders",
        },
        {
          title: "Total Orders",
          value: summary.totalOrders,
          description: "Completed orders",
        },
        {
          title: "Products Sold",
          value: summary.productsSold,
          description: "Items in completed orders",
        },
        {
          title: "Average Order Value",
          value: `₹${summary.averageOrderValue.toLocaleString("en-IN", {
            maximumFractionDigits: 2,
          })}`,
          description: "Average revenue per order",
        },
      ]
    : [];

  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((item) => (
        <div
          key={item.title}
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-sm font-medium text-slate-500">
            {item.title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-800">
            {item.value}
          </h2>

          <p className="mt-3 text-sm text-slate-500">
            {item.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default SummaryCard;
