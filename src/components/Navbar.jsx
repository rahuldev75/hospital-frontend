import React from 'react';

export default function NavBar({ setView }) {
  return (
    <nav className="nav">
      <button onClick={() => setView('appointments')}>Appointments</button>
      <button onClick={() => setView('patients')}>Patients</button>
      <button onClick={() => setView('doctors')}>Doctors</button>
    </nav>
  );
}