import { Plus, Search } from "lucide-react";
import React from "react";
import { statuses } from "../helpers/mock-data";

const FilterCard = () => {
    const [search, setSearch] = React.useState("");
    const [statusFilter, setStatusFilter] = React.useState("all");
    const [currentPage, setCurrentPage] = React.useState(1);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setCurrentPage(1);
    }
    const [sortBy, setSortBy] = React.useState("name");
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 backdrop-blur">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="md:col-span-2 flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-lg border-2 border-gray-200 hover:border-blue-400 transition">
          <Search size={22} className="text-blue-600" />
          <input
            type="text"
            placeholder="Search by name or location..."
            value={search}
            onChange={handleSearch}
            className="flex-1 bg-transparent outline-none text-gray-800 text-lg"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="px-4 py-3 border-2 border-gray-200 rounded-lg bg-white text-gray-800 font-semibold hover:border-blue-400 focus:border-blue-600 transition cursor-pointer"
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-3 border-2 border-gray-200 rounded-lg bg-white text-gray-800 font-semibold hover:border-blue-400 focus:border-blue-600 transition cursor-pointer"
        >
          <option value="name">Sort by Name</option>
        </select>
      </div>

      <button
        onClick={() => setShowAddModal(true)}
        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition font-semibold"
      >
        <Plus size={22} /> Add New Dealer
      </button>
    </div>
  );
};

export default FilterCard;
