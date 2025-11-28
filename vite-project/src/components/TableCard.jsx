import React,{ useState} from 'react'
import { initialDealers } from '../helpers/mock-data';
import { AlertCircle, CheckCircle, Edit, Eye, XCircle } from 'lucide-react';

const TableCard = () => {
    const [paginatedDealers, setPaginatedDealers] = useState(initialDealers);
    const [viewingDealer, setViewingDealer] = useState(null);
      const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 border-green-300';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Inactive': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };
      const getStatusIcon = (status) => {
    switch (status) {
      case 'Active': return <CheckCircle size={16} />;
      case 'Pending': return <AlertCircle size={16} />;
      case 'Inactive': return <XCircle size={16} />;
      default: return null;
    }
  };
  return (
    <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold">Dealer Name</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Location</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Contact</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Status</th>
                      <th className="px-6 py-4 text-center text-sm font-bold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedDealers.map((dealer, idx) => (
                      <tr key={dealer.id} className={`border-b hover:bg-blue-50 transition ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                        <td className="px-6 py-4 text-gray-900 font-bold">{dealer.name}</td>
                        <td className="px-6 py-4 text-gray-700">{dealer.location}</td>
                        <td className="px-6 py-4 text-gray-700">{dealer.contact}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border-2 ${getStatusColor(dealer.status)}`}>
                            {getStatusIcon(dealer.status)} {dealer.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex justify-center gap-3">
                            <button
                              onClick={() => setViewingDealer(dealer)}
                              className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition"
                              title="View"
                            >
                              <Eye size={20} />
                            </button>
                            <button
                              onClick={() => setEditingDealer(dealer)}
                              className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition"
                              title="Edit"
                            >
                              <Edit size={20} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
  )
}

export default TableCard