import React, { useEffect, useState } from 'react';
import { getPatients, addPatient, deletePatient } from '../api';

export default function PatientsList() {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    const res = await getPatients();
    setPatients(res.data);
  };

  const submit = async (e) => {
    e.preventDefault();
    await addPatient({ name });
    setName('');
    fetchData();
  };

  const remove = async (id) => {
    await deletePatient(id);
    fetchData();
  };

  return (
    <div className="card">
      <h3>Patients</h3>
      <form onSubmit={submit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Patient name" required />
        <button type="submit">Add</button>
      </form>

      <ul>
        {patients.map(p => (
          <li key={p._id}>{p.name} <button onClick={() => remove(p._id)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}