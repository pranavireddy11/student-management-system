import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api';

function EditStudent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [student, setStudent] = useState({
    name: '',
    age: '',
    email: '',
    course: ''
  });

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const res = await api.get(`/${id}`);
      setStudent(res.data);
    } catch (err) {
      console.error('Failed to fetch student:', err);
    }
  };

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/${id}`, student);
      alert('Student updated successfully!');
      navigate('/students');
    } catch (err) {
      console.error('Failed to update student:', err);
      alert('Failed to update student.');
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={student.age}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
          required
        /><br /><br />
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
}

export default EditStudent;
