// CustomerDashboard.js
import React from 'react';
import Header2 from './reuse/header2';
import LogoutButton from './reuse/Logout';

function CustomerDashboard() {
  return (
    <div>
      <Header2 />  
      <h2>Customer Dashboard</h2>
      {/* Customer-specific content */}
      <LogoutButton />
    </div>
  );
}

export default CustomerDashboard;
