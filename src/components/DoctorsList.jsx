import React, { useEffect, useState } from 'react';
import { getDoctors, addDoctor, deleteDoctor } from '../api';

export default function DoctorsList() {
  const [doctors, setDoctors] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => { fetchDoctors(); }, []);

  const fetchDoctors = async () => {
    const res = await getDoctors();
    setDoctors(res.data);
  };

  const submit = async (e) => {
    e.preventDefault();
    await addDoctor({ name });
    setName('');
    fetchDoctors();
  };

  const remove = async (id) => {
    await deleteDoctor(id);
    fetchDoctors();
  };

  return (
    <div className="card">
      <h3>Doctors</h3>
      <form onSubmit={submit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Doctor name" required />
        <button type="submit">Add</button>
      </form>

      <ul>
        {doctors.map(d => (
          <li key={d._id}>{d.name} <button onClick={() => remove(d._id)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}