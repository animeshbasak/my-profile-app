import React from 'react';
import './PremiumAccountBanner.css';
import briefcaseIcon from '../../../../assets/briefcase.png';

const PremiumAccountBanner = () => {
  return (
    <div className="premium-banner">
      <div className="premium-banner-icon">
        <img src={briefcaseIcon} alt="Premium" />
      </div>
      <div className="premium-banner-text">
        <span>Premium Account </span>
        <p>You have a premium account, granting you access to all the remarkable features offered by ResumeDone. With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes and cover letters in both PDF and Word formats.</p>
      </div>
    </div>
  );
};

export default PremiumAccountBanner;
