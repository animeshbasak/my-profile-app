import React from 'react';
import './ProfileForm.css';
import PersonalInfoForm from './SubComponents/PersonalInfoForm/PersonalInfoForm';
import PremiumAccountBanner from './SubComponents/PremiumAccountBanner/PremiumAccountBanner';
import DeleteAccountSection from './SubComponents/DeleteAccount/DeleteAccountSection';
import Footer from './SubComponents/Footer/Footer';

const ProfileForm = () => {
  return (
    <div className='profileform-container'>
      <div className="profile-container">
        <PremiumAccountBanner />
        <PersonalInfoForm />
        <DeleteAccountSection />
        <div className="contact-section">
          <p><a href='#'>Get in touch with our support team</a> if you have any question or want to leave some feedback.</p>
          <p>We'll be happy to hear from you.</p>
        </div>
      </div >
      <div className='footer'>
        <Footer />
      </div>
    </div>

  );
};

export default ProfileForm;
