import React from 'react'

const DashboardHeader = () => {
  return (
            <header className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Sales Dashboard
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Welcome back! Here's what's happening with your store.
          </p>
        </div>

        <button className="w-fit rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
          Last 30 days
        </button>
      </header>

  )
}

export default DashboardHeader
