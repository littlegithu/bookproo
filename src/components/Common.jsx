import React from 'react';

export const Input = ({ label, type = 'text', value, onChange, required = false, className = '' }) => (
  <div className={className}>
    {label && <label className="block text-sm font-medium mb-1">{label}</label>}
    <input type={type} value={value} onChange={onChange} required={required} className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400" />
  </div>
);

export const Button = ({ children, type = 'button', variant = 'primary', size = 'md', onClick, className = '' }) => {
  const base = 'rounded font-medium transition';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };
  const sizes = { sm: 'px-3 py-1 text-sm', md: 'px-4 py-2', lg: 'px-6 py-3' };
  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>
  );
};

export const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export const Spinner = () => <div className="animate-spin border-4 border-t-blue-600 rounded-full w-8 h-8 mx-auto"></div>;
export const Toast = ({ message, type = 'info' }) => (
  <div className={`fixed bottom-4 right-4 p-3 rounded text-white ${type === 'error' ? 'bg-red-500' : 'bg-green-500'}`}>
    {message}
  </div>
);
