import React from 'react';
import './DeleteAccountSection.css';

const DeleteAccountSection = () => {
  return (
    <div className="delete-account-section">
      <h2>Delete Account</h2>
      <p>If you delete your account you’ll be permanently removing it from our systems – you can’t undo it.</p>
      <span className="delete-account-button">Yes, Delete my account</span>
    </div>
  );
};

export default DeleteAccountSection;
