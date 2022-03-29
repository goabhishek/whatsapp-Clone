import './App.css';
import React from "react";
import Sidebar from './Sidebar'

function App() {
  return (
    <div className="App">
      <h1>Lets Build Whatsapp</h1>
      <div className="app__body">
        <Sidebar />
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;
