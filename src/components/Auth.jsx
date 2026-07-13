import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Input, Button } from './Common';

export default function Auth() {
  const { login, register, resetPassword } = useAuth();
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ email: '', password: '', name: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'login') login(form.email, form.password);
    else if (mode === 'register') register(form.email, form.password, form.name);
    else resetPassword(form.email);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">
        {mode === 'login' ? 'Sign In' : mode === 'register' ? 'Register' : 'Reset Password'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'register' && (
          <Input label="Full Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />
        )}
        <Input label="Email" type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required />
        {mode !== 'reset' && (
          <Input label="Password" type="password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} required />
        )}
        <Button type="submit" className="w-full">Submit</Button>
      </form>
      <div className="mt-4 text-sm text-center space-x-2">
        {mode === 'login' && (
          <>
            <button onClick={() => setMode('register')} className="text-blue-600">Create account</button>
            <span>|</span>
            <button onClick={() => setMode('reset')} className="text-blue-600">Forgot password?</button>
          </>
        )}
        {mode !== 'login' && (
          <button onClick={() => setMode('login')} className="text-blue-600">Back to login</button>
        )}
      </div>
    </div>
  );
}
