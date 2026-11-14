import { useEffect, useState } from 'react'

import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ShowList from './components/ShowList';
import  type { Show } from "./types/shows";


import './App.css'
import { searchShows } from './api/showApi';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchShows() {
      try{
        setLoading(true);
        setError("");
        const data = await searchShows("superman");
        setShows(data);
      } catch(err) {
        setError("Unable to fetch shows.");
      } finally {
        setLoading(false);
      }
    }

    fetchShows();
  }, []);

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

        {loading && <p>Loading shows...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && (
          <ShowList
              shows={shows}
              searchTerm={searchTerm}
          />
        )}
      </main>
    </div>
  );
}

export default App