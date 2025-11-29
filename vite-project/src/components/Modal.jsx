import React from 'react';
import { X } from 'lucide-react';
const Modal = ({ isOpen, title, onClose, children, type = 'primary' }) => {
  if (!isOpen) return null;
  
  const bgColors = {
    primary: 'from-blue-600 to-blue-700',
    success: 'from-green-600 to-green-700',
    view: 'from-indigo-600 to-indigo-700'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full transform transition-all">
        <div className={`bg-gradient-to-r ${bgColors[type]} p-6 flex justify-between items-center rounded-t-xl`}>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <button onClick={onClose} className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition">
            <X size={24} />
          </button>
        </div>
        <div className="p-8 flex flex-col">{children}</div>
      </div>
    </div>
  );
};

export default Modal;