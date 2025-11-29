import React,{ useMemo, useState} from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Filter, Plus, Search } from "lucide-react";
import FilterCard from "./FilterCard";
import TableCard from "./TableCard";
import PaginationBar from "./PaginationBar";
import { initialDealers } from "../helpers/mock-data";

const DealerDashboard = () => {
  const [sideBarOpen, setSidebarOpen] = useState();
  const [dealers, setDealers] = useState(initialDealers);
   const [search, setSearch] = useState("");
   const [statusFilter, setStatusFilter] = useState('All');
   const [sortBy, setSortBy] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const filteredDealers = useMemo(() => {
    let result = dealers.filter(d => {
      const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase()) || 
                           d.location.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === 'All' || d.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
   
    if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }
    return result;
  }, [dealers, search, statusFilter, sortBy]);
  console.log("Filtered Dealers:", filteredDealers);
  const recordsPerPage = 10;
  const totalPages = Math.ceil(filteredDealers.length / recordsPerPage);
  const paginatedDealers = filteredDealers.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar sidebarOpen={sideBarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="flex-1 overflow-auto p-8">
          <div className="space-y-6">
            <FilterCard search={search} setSearch={setSearch} statusFilter={statusFilter} setStatusFilter={setStatusFilter} sortBy={sortBy} setSortBy={setSortBy} dealers={dealers} setDealers={setDealers} />
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <TableCard paginatedDealers={paginatedDealers} setDealers={setDealers} dealers={dealers}/>
            <PaginationBar  paginatedDealers={paginatedDealers} totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} recordsPerPage={recordsPerPage} filteredDealers={filteredDealers}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerDashboard;
