import { AlertCircle, CheckCircle, XCircle } from 'lucide-react'
import React from 'react'
import Modal from './Modal'

const ViewDealerModal = ({dealer,onClose}) => {
  return (
    <Modal isOpen={!!dealer} title={dealer?.name} onClose={onClose} type="view">
    <div className="space-y-4">
      {[
        { label: 'Location', value: dealer?.location },
        { label: 'Email', value: dealer?.email },
        { label: 'Phone', value: dealer?.phone },
        { label: 'Address', value: dealer?.address },
        { label: 'Operating Hours', value: dealer?.hours },
      ].map((item, i) => (
        <div key={i} className="flex justify-between items-start p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:shadow-md transition">
          <span className="text-gray-600 font-semibold">{item.label}:</span>
          <span className="text-gray-800 font-medium text-right ml-4">{item.value}</span>
        </div>
      ))}
      <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
        <span className="text-gray-600 font-semibold">Status:</span>
        <div className="flex items-center gap-2">
          {dealer?.status === 'Active' && <CheckCircle size={20} className="text-green-600" />}
          {dealer?.status === 'Pending' && <AlertCircle size={20} className="text-yellow-600" />}
          {dealer?.status === 'Inactive' && <XCircle size={20} className="text-red-600" />}
          <span className={`font-semibold ${
            dealer?.status === 'Active' ? 'text-green-700' : 
            dealer?.status === 'Pending' ? 'text-yellow-700' : 
            'text-red-700'
          }`}>{dealer?.status}</span>
        </div>
      </div>
      <button onClick={onClose} className="w-full mt-6 bg-gray-300 text-gray-800 py-3 rounded-lg hover:bg-gray-400 font-semibold transition">
        Close
      </button>
    </div>
  </Modal>
  )
}

export default ViewDealerModal