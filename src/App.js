import React, { useState } from 'react';
import './styles.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="AppContainer">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Content activeSection={activeSection} />
    </div>
  );
}

export default App;
