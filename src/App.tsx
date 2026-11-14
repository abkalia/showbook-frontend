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
  const query = searchTerm.trim();

  // Don't search for empty or very short queries
  if (query.length < 2) {
    setShows([]);
    setLoading(false);
    setError("");
    return;
  }

  let ignore = false;

  const timer = setTimeout(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await searchShows(query);

      if (!ignore) {
        setShows(data);
      }
    } catch (err) {
      if (!ignore) {
        setError("Unable to fetch shows.");
      }
    } finally {
      if (!ignore) {
        setLoading(false);
      }
    }
  }, 500);

  // Cleanup
    return () => {
      clearTimeout(timer);
      ignore = true;
    };
  }, [searchTerm]);

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

        {searchTerm.trim().length < 2 && (
          <p>Type at least 2 characters to search.</p>
        )}

        {loading && <p>Loading shows...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && searchTerm.trim().length >= 2 && (
        <ShowList shows={shows} searchTerm="" />
        )}
      
      </main>
    </div>
  );
}

export default App