import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Input, Button } from './Common';

export default function Profile() {
  const { user, updateProfile } = useAuth();
  const [form, setForm] = useState({ name: user?.name || '', email: user?.email || '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(form);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-4">Profile & Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input label="Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
        <Input label="Email" type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
        <Button type="submit">Update Profile</Button>
      </form>
    </div>
  );
}
