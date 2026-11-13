export interface Show {
  id: number;
  name: string;
  genre: string;
  rating: number;
  image: string;
}

export const shows: Show[] = [
  {
    id: 1,
    name: "Breaking Bad",
    genre: "Crime, Drama",
    rating: 9.5,
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg"
  },
  {
    id: 2,
    name: "Stranger Things",
    genre: "Drama, Sci-Fi, Horror",
    rating: 8.4,
    image: "https://static.tvmaze.com/uploads/images/original_untouched/595/1489169.jpg"
  },
  {
    id: 3,
    name: "Brooklyn Nine-Nine",
    genre: "Comedy, Action, Crime",
    rating: 8.1,
    image: "https://static.tvmaze.com/uploads/images/original_untouched/402/1007484.jpg"
  },
  {
    id: 4,
    name: "Sherlock",
    genre: "Crime, Mystery",
    rating: 9.1,
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/3.jpg"
  }
];