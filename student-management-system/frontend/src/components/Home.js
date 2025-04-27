import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Student Management System</h1>
      <p>Manage students easily!</p>
      <Link to="/students">
        <button>View Students</button>
      </Link>
    </div>
  );
}

export default Home;
