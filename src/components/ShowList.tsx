import ShowCard from "./ShowCard";
import type { Show } from "../types/shows";

interface ShowListProps {
    shows: Show[];
    searchTerm: string;
}

function ShowList({ shows, searchTerm }: ShowListProps) {

const normalizedSearch = searchTerm.trim().toLowerCase();

const filteredShows = shows.filter((show) =>
    show.name.toLowerCase().includes(normalizedSearch) ||
    show.genre.split(",").some((genre) =>
        genre.trim().toLowerCase().includes(normalizedSearch)
    )
);
    
    return(
        <div>
            <p className="results-count">
                Showing {filteredShows.length} of {shows.length} shows </p>
            <div className="show-grid">
                { filteredShows.map((show) => (
                    <ShowCard key={show.id} show={show} />
                ))}

                {filteredShows.length === 0 && (
                    <p>No Shows found.</p>
                )}
            </div>
        </div>
    );
}

export default ShowList;