export interface TvMazeSearchResult {
    score: number;
    show: TvMazeShow;
}

export interface TvMazeShow {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    rating: Rating;
    image: Image | null;
    summary: string;
}

export interface Rating {
    average: number | null;
}

export interface Image {
    medium: string;
    original: string;
}