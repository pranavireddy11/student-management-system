import React, { useState } from 'react';
import axios from 'axios';

function AddStudent() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [department, setDepartment] = useState('');
  const [enrollmentYear, setEnrollmentYear] = useState('');
  const [isActive, setIsActive] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/students', {
        firstName,
        lastName,
        email,
        dob,
        department,
        enrollmentYear,
        isActive
      });
      alert('Student added successfully!');
    } catch (err) {
      console.error('Failed to add student:', err);
      alert('Failed to add student.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="First Name" required type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /><br /><br />
        <input placeholder="Last Name" required type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /><br /><br />
        <input placeholder="Email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
        <input placeholder="Date of Birth" required type="date" value={dob} onChange={(e) => setDob(e.target.value)} /><br /><br />
        <input placeholder="Department" required type="text" value={department} onChange={(e) => setDepartment(e.target.value)} /><br /><br />
        <input placeholder="Enrollment Year" required type="number" value={enrollmentYear} onChange={(e) => setEnrollmentYear(e.target.value)} /><br /><br />
        <label>
          Active:
          <input type="checkbox" checked={isActive} onChange={(e) => setIsActive(e.target.checked)} style={{ marginLeft: '10px' }} />
        </label><br /><br />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
