import { useState } from 'react'

import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ShowList from './components/ShowList';


import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className= "app">
      <Navbar />

      <main className="main-content">
        <h1>Discover Shows</h1>

        <p className="subtitle">
          Find your next favourite show.
        </p>

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        <ShowList searchTerm={searchTerm}/>
      </main>
    </div>
  );
}

export default App