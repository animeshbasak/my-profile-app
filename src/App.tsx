import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileForm from './components/ProfileForm/ProfileForm';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />
      <ProfileForm />
    </div>
  );
};

export default App;
