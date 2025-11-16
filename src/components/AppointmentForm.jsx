import React, { useState, useEffect } from 'react';
import { addAppointment, getDoctors, getPatients } from '../api';

export default function AppointmentForm() {
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getPatients().then((res) => setPatients(res.data));
    getDoctors().then((res) => setDoctors(res.data));
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    await addAppointment({ patientName, doctorName, date, notes });
    setPatientName('');
    setDoctorName('');
    setDate('');
    setNotes('');
    window.location.reload();
  };

  return (
    <form className="card" onSubmit={submit}>
      <h3>New Appointment</h3>

      <label>Patient</label>
      <select value={patientName} onChange={(e) => setPatientName(e.target.value)} required>
        <option value="">Select patient</option>
        {patients.map((p) => (
          <option key={p._id} value={p.name}>{p.name}</option>
        ))}
      </select>

      <label>Doctor</label>
      <select value={doctorName} onChange={(e) => setDoctorName(e.target.value)} required>
        <option value="">Select doctor</option>
        {doctors.map((d) => (
          <option key={d._id} value={d.name}>{d.name}</option>
        ))}
      </select>

      <label>Date & Time</label>
      <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />

      <label>Notes</label>
      <input value={notes} onChange={(e) => setNotes(e.target.value)} />

      <button type="submit">Add</button>
    </form>
  );
}