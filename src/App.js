import React from 'react';
import './App.css'; // import your CSS file

let App = () => {
  return (
    <div className="app">
      <header className="header">Header</header>
      <div className="main">
        <aside className="sidebar">Sidebar 1</aside>
        <div className="component">Main Component</div>
        <aside className="sidebar">Sidebar 2</aside>
      </div>
      <footer className="footer">Footer</footer>
    </div>
  );
}


export default App;
