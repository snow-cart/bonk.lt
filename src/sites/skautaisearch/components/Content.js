import React from 'react';
import loadContent from './loadContent';

function Content() {
    loadContent();
  return (
    <main className="content">
    <div id="search-results" className="search-results"></div>
    <script>
        
    </script>
  </main>
  );
}

export default Content;
