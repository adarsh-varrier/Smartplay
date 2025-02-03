// OwnerDashboard.js
import React from 'react';
import LogoutButton from './reuse/Logout';

function AdminDashboard() {
  return (
    <div>
      <h2> Welcome BOSS!!</h2>
      {/* Owner-specific content */}
      <LogoutButton />
    </div>
  );
}

export default AdminDashboard;