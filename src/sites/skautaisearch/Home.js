import React from 'react';
import Content from './components/Content'

function Home() {
  return (
    <div className="container">
    <header className="toprow">
      <div className="search">
        <form id="search-form">
          <input
            type="text"
            id="search-input"
            placeholder="Įvesti čia..."
          />
          <button type="submit">Ieškoti</button>
        </form>
      </div>
      <Content/>
    </header>
  </div>
  );
}

export default Home;
