import React, { useEffect, useState } from 'react';
import { getAppointments, deleteAppointment } from '../api';

export default function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getAppointments();
    setAppointments(res.data);
  };

  const remove = async (id) => {
    await deleteAppointment(id);
    fetchData();
  };

  return (
    <div className="card">
      <h3>Appointments</h3>
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a._id}>
              <td>{a.patientName}</td>
              <td>{a.doctorName}</td>
              <td>{new Date(a.date).toLocaleString()}</td>
              <td>{a.notes}</td>
              <td><button onClick={() => remove(a._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}