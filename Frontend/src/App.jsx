
import DashboardHeader from "./components/DashboardHeader"
import SummaryCard from "./components/SummaryCard"
import RevenueCard from "./components/RevenueCard"
import CategoryChart from "./components/CategoryChart"
import RecentOrder from "./components/RecentOrder"



function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-10">
      <DashboardHeader/>

     <SummaryCard/>
     <RevenueCard/>

<CategoryChart/>

   <RecentOrder/>


</div>
  )}

export default App
