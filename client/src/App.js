import React from 'react';
import './App.css';
import MessageDisplay from './components/MessageDisplay';
import MessageInput from './components/MessageInput';

function App() {
  
  return (
    <div className="App">
      <MessageDisplay />
      <MessageInput />
    </div>
  );
}

export default App;
