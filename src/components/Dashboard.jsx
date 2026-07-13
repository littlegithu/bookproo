import React from 'react';
import { useAppointments } from '../hooks/useAppointments';

export default function Dashboard() {
  const { appointments } = useAppointments();
  const stats = {
    total: appointments.length,
    upcoming: appointments.filter(a => new Date(a.date) > new Date()).length,
    completed: appointments.filter(a => a.status === 'completed').length,
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">Total Appointments: {stats.total}</div>
        <div className="bg-white p-4 rounded shadow">Upcoming: {stats.upcoming}</div>
        <div className="bg-white p-4 rounded shadow">Completed: {stats.completed}</div>
      </div>
      <h2 className="text-xl font-semibold mb-2">Upcoming Appointments</h2>
      <ul className="space-y-2">
        {appointments.filter(a => new Date(a.date) > new Date()).slice(0, 5).map(a => (
          <li key={a.id} className="bg-white p-3 rounded shadow">{a.patient} - {a.date}</li>
        ))}
      </ul>
    </div>
  );
}
