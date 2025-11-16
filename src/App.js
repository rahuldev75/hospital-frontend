import React, { useState } from 'react';
import NavBar from './components/Navbar';
import AppointmentsList from './components/AppointmentList';
import AppointmentForm from './components/AppointmentForm';
import PatientsList from './components/PatientsList';
import DoctorsList from './components/DoctorsList';

export default function App() {
  const [view, setView] = useState('appointments');

  return (
    <div className="container">
      <NavBar setView={setView} />

      {view === 'appointments' && (
        <>
          <AppointmentForm />
          <AppointmentsList />
        </>
      )}

      {view === 'patients' && <PatientsList />}
      {view === 'doctors' && <DoctorsList />}
    </div>
  );
}