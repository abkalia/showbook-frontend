import api from "./apiClient";
import  type { Show } from "../types/shows";
import type { TvMazeSearchResult } from "../types/tvMaze";

export async function searchShows(query: String): Promise<Show[]> {
    const response = await api.get<TvMazeSearchResult[]>(
        "/shows/search",
        {
            params: {query}
        }
    );

    return response.data.map((result) => ({
        id: result.show.id,
        name: result.show.name,
        genre: result.show.genres.join(", "),
        rating: result.show.rating.average ?? 0,
        image: result.show.image?.medium ?? ""
    }))
};