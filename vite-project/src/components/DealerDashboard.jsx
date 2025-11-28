import React from 'react'
import Sidebar from './Sidebar';
import Header from './Header';
import { Filter, Plus, Search } from 'lucide-react';
import FilterCard from './FilterCard';
import TableCard from './TableCard';

const DealerDashboard = () => {
    const [sideBarOpen, setSidebarOpen] = React.useState();
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Sidebar sidebarOpen={sideBarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="flex-1 flex flex-col overflow-hidden">
        <Header/>

              <div className="flex-1 overflow-auto p-8">
          <div className="space-y-6">
            {/* Filters Card */}
            <FilterCard />
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <TableCard />
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DealerDashboard