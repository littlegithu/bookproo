import React, { useState } from 'react';
import { useAppointments } from '../hooks/useAppointments';
import { Modal, Button, Input } from './Common';

export default function Appointments() {
  const { appointments, addAppointment, updateAppointment, deleteAppointment } = useAppointments();
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ patient: '', date: '', status: 'scheduled' });

  const handleSave = () => {
    if (editing) updateAppointment(editing.id, form);
    else addAppointment(form);
    setShowModal(false);
    setEditing(null);
    setForm({ patient: '', date: '', status: 'scheduled' });
  };

  const openEdit = (appt) => {
    setEditing(appt);
    setForm(appt);
    setShowModal(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Appointments</h1>
        <Button onClick={() => setShowModal(true)}>+ New Appointment</Button>
      </div>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Patient</th>
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(a => (
            <tr key={a.id} className="border-t">
              <td className="p-2">{a.patient}</td>
              <td className="p-2">{a.date}</td>
              <td className="p-2">{a.status}</td>
              <td className="p-2 space-x-2">
                <Button variant="outline" size="sm" onClick={() => openEdit(a)}>Edit</Button>
                <Button variant="danger" size="sm" onClick={() => deleteAppointment(a.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={editing ? 'Edit Appointment' : 'New Appointment'}>
        <Input label="Patient" value={form.patient} onChange={(e) => setForm({...form, patient: e.target.value})} />
        <Input label="Date" type="date" value={form.date} onChange={(e) => setForm({...form, date: e.target.value})} />
        <div className="mt-2">
          <label className="block text-sm font-medium">Status</label>
          <select value={form.status} onChange={(e) => setForm({...form, status: e.target.value})} className="w-full border p-2 rounded">
            <option value="scheduled">Scheduled</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <Button variant="outline" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </Modal>
    </div>
  );
}
