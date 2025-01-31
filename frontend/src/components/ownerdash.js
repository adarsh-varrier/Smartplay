// OwnerDashboard.js
import React from 'react';
import LogoutButton from './reuse/Logout';
import Header2 from './reuse/header2';

function OwnerDashboard() {
  return (
    <div>
    <Header2 />
      <h2>Owner Dashboard</h2>
      {/* Owner-specific content */}
    <LogoutButton />
    </div>
  );
}

export default OwnerDashboard;
