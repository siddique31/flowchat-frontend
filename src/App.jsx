import React from 'react';
import Sidebar from './components/Sidebar';
import ChatBox from './components/ChatBox';

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Chat Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Top Logo */}
        <div style={{ background: '#fff', padding: '10px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Logo" style={{ height: '50px' }} />
          <h1 style={{ marginLeft: '10px', fontSize: '24px', color: '#333' }}>FlowChat</h1>
        </div>

        {/* Chat Box */}
        <div style={{ flex: 1, padding: '20px', background: '#f9f9f9' }}>
          <ChatBox />
        </div>

        {/* Bottom Avatar / Footer */}
        <div style={{ padding: '10px', borderTop: '1px solid #ddd', display: 'flex', alignItems: 'center', background: '#fff' }}>
          <img src="/images/avatar.png" alt="Avatar" style={{ width: '40px', borderRadius: '50%' }} />
          <span style={{ marginLeft: '10px', color: '#555' }}>You</span>
        </div>

      </div>
    </div>
  );
}

export default App;
