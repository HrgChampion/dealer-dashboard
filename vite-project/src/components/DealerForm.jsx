import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
const DealerForm = ({ dealer, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(dealer || {
    name: '',
    address: '',
    email: '',
    phone: '',
    hours: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Dealer name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.hours.trim()) newErrors.hours = 'Operating hours are required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="space-y-1">
      {Object.entries(formData).map(([key, value]) => (
        <div key={key}>
          <label className="block text-sm font-semibold text-gray-700 mb-2 capitalize">{key}</label>
          <input
            type={key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'text'}
            name={key}
            value={value}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
              errors[key] ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            placeholder={`Enter ${key}`}
          />
          {errors[key] && <p className="text-red-600 text-sm mt-1 flex items-center gap-1"><AlertCircle size={16} />{errors[key]}</p>}
        </div>
      ))}
      <div className="flex gap-3 pt-6">
        <button 
          onClick={handleSubmit} 
          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition font-semibold"
        >
          Save Dealer
        </button>
        <button 
          onClick={onCancel} 
          className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition font-semibold"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DealerForm;