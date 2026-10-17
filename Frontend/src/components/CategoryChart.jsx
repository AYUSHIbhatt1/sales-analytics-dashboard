
import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
const categoryColors = [
  "#6366f1",
  "#14b8a6",
  "#f59e0b",
  "#f43f5e",
];

const CategoryChart = () => {
  const [categoryRevenue, setCategoryRevenue] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
       const response = await axios.get(
  `${import.meta.env.VITE_API_URL}/api/dashboard/categories`
);

        const categories = response.data.categories.map((item) => ({
          category: item._id,
          revenue: item.totalRevenue,
        }));

        setCategoryRevenue(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    getCategories();
  }, []);

  return (
    <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-800">
        Sales by Category
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Revenue distribution across product categories
      </p>

      <div className="mt-4 h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryRevenue}
              dataKey="revenue"
              nameKey="category"
              innerRadius={75}
              outerRadius={110}
              paddingAngle={4}
            >
              {categoryRevenue.map((item, index) => (
                <Cell
                  key={item.category}
                  fill={categoryColors[index % categoryColors.length]}
                />
              ))}
            </Pie>
  <Legend />
            <Tooltip
              formatter={(value) => [
                `₹${Number(value).toLocaleString("en-IN")}`,
                "Revenue",
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default CategoryChart;