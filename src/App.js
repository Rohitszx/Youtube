import React from 'react';
import Header  from "./Header";
import Sidebar from "./Sidebar";
import Recommended from "./Recommended";
import './App.css';

function App() {
  return (
    <div className="App">
     {/* <h1>Rohit Singh</h1> */}
     <Header/>
     <div className="app_page">
      <Sidebar/>
      <Recommended/>
     </div>
    </div>
  );
}

export default App;
