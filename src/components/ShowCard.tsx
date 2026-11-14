import type { Show } from "../types/shows";

interface ShowCardProps {
    show: Show;
}

function ShowCard({ show }: ShowCardProps){
    return(
        <div className="show-card">
            <img src= {show.image} alt={show.name} />

            <div className="show-info">
                <h3>{show.name}</h3>
                <p>{show.genre}</p>
                <span>⭐ {show.rating}</span>
            </div>
        </div>
    );
}

export default ShowCard;