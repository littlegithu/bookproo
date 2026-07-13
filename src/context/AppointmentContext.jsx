import React, { createContext, useState, useEffect } from 'react';

export const AppointmentContext = createContext();

// Dummy initial data
const initialAppointments = [
  { id: 1, patient: 'John Doe', date: '2026-07-05', status: 'scheduled' },
  { id: 2, patient: 'Jane Smith', date: '2026-07-06', status: 'scheduled' },
  { id: 3, patient: 'Alice Johnson', date: '2026-06-28', status: 'completed' },
];

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState(initialAppointments);

  const addAppointment = async (data) => {
    const newAppt = { id: Date.now(), ...data };
    setAppointments([...appointments, newAppt]);
  };

  const updateAppointment = async (id, data) => {
    setAppointments(appointments.map(a => a.id === id ? { ...a, ...data } : a));
  };

  const deleteAppointment = async (id) => {
    setAppointments(appointments.filter(a => a.id !== id));
  };

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment, updateAppointment, deleteAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};
