import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock: auto-login for demo
    setUser({ name: 'Dr. Smith', email: 'doctor@clinic.com' });
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    setUser({ name: 'Dr. Smith', email });
  };

  const register = async (email, password, name) => {
    setUser({ name, email });
  };

  const resetPassword = async (email) => {
    alert('Password reset link sent to ' + email);
  };

  const logout = () => setUser(null);
  const updateProfile = async (data) => {
    setUser({ ...user, ...data });
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, resetPassword, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
