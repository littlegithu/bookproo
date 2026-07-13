import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Layout() {
  const { logout } = useAuth();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Doctor's App</h1>
        <nav className="space-x-4">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/appointments">Appointments</Link>
          <Link to="/profile">Profile</Link>
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
        </nav>
      </header>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-200 p-2 text-center text-sm">© 2026 Doctor's Appointment System</footer>
    </div>
  );
}
