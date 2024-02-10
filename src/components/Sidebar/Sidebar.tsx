import React, { useState } from 'react';
import './Sidebar.css';
import resumizelogo from '../../assets/resumizelogo.png';

const initialStarredItems = [
  { label: 'Software Engineer', icon: '⭐' },
  { label: 'Computer Hardware Engineer', icon: '⭐' },
  { label: 'Network Engineer', icon: '⭐' },
  { label: 'Technical Support', icon: '⭐' },
  { label: 'Network Administrator', icon: '⭐' },
  { label: 'Management', icon: '⭐' },
  { label: 'Data Analysis', icon: '⭐' },
  { label: 'Computer Technician', icon: '⭐' },
];

const initialBoards = [
  { label: 'Board 1', icon: '📋' },
  { label: 'Board 2', icon: '📋' },
  { label: 'Board 3', icon: '📋' },
  { label: 'Board agent 1', icon: '📋' },
];

const Sidebar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [starredItems] = useState(initialStarredItems);
  const [boards, setBoards] = useState(initialBoards);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredStarredItems = searchTerm
    ? starredItems.filter(item =>
      item.label.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : starredItems;

  const handleAddBoard = () => {
    const newBoardName = `Board ${boards.length + 1}`;
    setBoards(boards.concat({ label: newBoardName, icon: '📋' }));
  };

  return (
    <div className='sidebar-container'>
      <aside className="sidebar">
        <div className="sidebar-header">
          {/*  Use alt text that describes the image */}
          <h1> <img src={resumizelogo} alt="Premium" />Resumizeme</h1>
        </div>
        <div className="sidebar-section templates">
          <span role="img" aria-label="file folder">📁</span>
          My Templates
        </div>
        <div className="sidebar-section search search-box">
          <span role="img" aria-label="search">🔍</span>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="sidebar-section starred">
          {filteredStarredItems.map((item, index) => (
            <div key={index} className="starred-item">
              <span role="img" aria-label="star">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
        <div className="sidebar-section boards">
          <div className="boards-header">
            <span role="img" aria-label="clipboard">📋</span>
            My Boards
            <button onClick={handleAddBoard}>➕</button>
          </div>
          {boards.map((board, index) => (
            <div key={index} className="board-item">
              <span role="img" aria-label="board">{board.icon}</span>
              {board.label}
            </div>
          ))}
        </div>

      </aside>
      <div className="sidebar-footer">
        <div className='sidebar-footerbox'>
          <div className="profile">
            <span role="img" aria-label="user">👤</span>
            Carla
          </div>
          <button className="settings-btn">
            <span role="img" aria-label="settings">⚙️</span>
          </button>
        </div>
      </div>
    </div>

  );
};

export default Sidebar;
