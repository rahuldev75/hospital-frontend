import axios from 'axios';

const API_BASE = 'http://localhost:5000';

export const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' }
});

// Appointments
export const getAppointments = () => api.get('/appointments');
export const addAppointment = (data) => api.post('/appointments/add', data);
export const updateAppointment = (id, data) => api.put(`/appointments/update/${id}`, data);
export const deleteAppointment = (id) => api.delete(`/appointments/delete/${id}`);

// Patients
export const getPatients = () => api.get('/patients');
export const addPatient = (data) => api.post('/patients/add', data);
export const updatePatient = (id, data) => api.put(`/patients/update/${id}`, data);
export const deletePatient = (id) => api.delete(`/patients/delete/${id}`);

// Doctors
export const getDoctors = () => api.get('/doctors');
export const addDoctor = (data) => api.post('/doctors/add', data);
export const updateDoctor = (id, data) => api.put(`/doctors/update/${id}`, data);
export const deleteDoctor = (id) => api.delete(`/doctors/delete/${id}`);