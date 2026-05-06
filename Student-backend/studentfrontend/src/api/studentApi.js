import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
    headers: { 'Content-Type': 'application/json' },
});

export const getAllStudents = async () =>
    (await api.get('/api/students/allstudents')).data;

export const getStudentById = async (id) =>
    (await api.get(`/api/students/getstudent/${id}`)).data;

export const addStudent = async (data) =>
    (await api.post('/api/students/add', data)).data;

export const updateStudent = async (id, data) =>
    (await api.put(`/api/students/update/${id}`, data)).data;

export const deleteStudent = async (id) =>
    (await api.delete(`/api/students/delete/${id}`)).data;
