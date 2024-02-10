import React from 'react';
import './PersonalInfoForm.css';
import CustomInput from './CustomInput';
import profilepic from '../../../../assets/image.png';

const PersonalInfoForm = () => {
  return (
    <div className="personal-info-container">
      <h2 className="personal-info-title">Personal Information</h2>
      <div className='personal-info-subcontainer'>
        <div className='personal-info-form'>
          <CustomInput label="First Name" size="medium" placeholder='Peter' type='text' />
          <CustomInput label="Last Name" size="medium" placeholder='Cetera' type='text' />
          <CustomInput label="City" size="medium" placeholder='London' type='text' />
          <CustomInput label="Postal Code" size="medium" placeholder='201010' type='number' />
          <CustomInput label="Address" size="large" placeholder='121B Bakers Street' type="text" />
          <CustomInput label="Email" size="medium" placeholder='xyz@zoom.in' type="email" />
          <CustomInput label="Phone" size="medium" placeholder='+919999991100' type="number" />
          <CustomInput label="Password" size="medium" placeholder='******' type='password' />

        </div>
        <div className="profile-pic-container">
          <div className="profile-pic">
            <img src={profilepic} alt="Profile" />
          </div>
        </div>
      </div>
      <p className="form-note">
        Use this email to log in to your resumedone.io account and receive notifications.
      </p>
      <button type="submit" className="save-btn">Save</button>
      <div className="checkbox-container">
        <input type="checkbox" id="profile-checkbox" />
        <label htmlFor="profile-checkbox">Show my profile to serious employers on hirethebest.io for free</label>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
