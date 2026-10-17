
import React, { useEffect, useState } from "react";
import axios from "axios";

const RecentOrder = () => {
  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    async function getOrders() {
      try {
        const response = await axios.get(
  `${import.meta.env.VITE_API_URL}/api/order`
);

    const latestOrders = response.data.orders
  .sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
  .slice(0, 5);

setRecentOrders(latestOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }

    getOrders();
  }, []);

  return (
    <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Recent Orders
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Overview of your latest customer orders
        </p>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[650px] text-left">
          <thead>
            <tr className="border-b border-slate-200 text-sm text-slate-500">
              <th className="px-4 py-3 font-medium">Order ID</th>
              <th className="px-4 py-3 font-medium">Customer</th>
              <th className="px-4 py-3 font-medium">Product</th>
              <th className="px-4 py-3 font-medium">Amount</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {recentOrders.map((order) => (
              <tr
                key={order._id}
                className="border-b border-slate-100 transition hover:bg-slate-50"
              >
                <td className="px-4 py-4 font-medium text-indigo-600">
                  {order.orderId}
                </td>

                <td className="px-4 py-4 text-slate-700">
                  {order.customer}
                </td>

                <td className="px-4 py-4 text-slate-600">
                  {order.product}
                </td>

                <td className="px-4 py-4 font-medium text-slate-800">
                  ₹{order.amount.toLocaleString("en-IN")}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      order.status === "completed"
                        ? "bg-emerald-100 text-emerald-700"
                        : order.status === "pending"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status.charAt(0).toUpperCase() +
                      order.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}

            {recentOrders.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="px-4 py-6 text-center text-slate-500"
                >
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RecentOrder;
