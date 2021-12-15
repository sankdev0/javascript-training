// This is an example of functional programming.
// Favor use of pure functions that accept parameters and do not access program state.

const movieList = [
    {
        title: "Batman",
        year: 1989,
        director: "Tim Burton",
        imdbRating: 7.9
    },
    {
        title: "Batman Returns",
        year: 1992,
        director: "Tim Burton",
        imdbRating: 7.0
    },
    {
        title: "Batman Forever",
        year: 1995,
        director: "Joel Schumacher",
        imdbRating: 5.4
    },
    {
        title: "Batman & Robin",
        year: 1997,
        director: "Joel Schumacher",
        imdbRating: 3.7
    },
    {
        title: "Batman Begins",
        year: 2005,
        director: "Christopher Nolan",
        imdbRating: 8.3
    },
    {
        title: "The Dark Knight",
        year: 2008,
        director: "Christopher Nolan",
        imdbRating: 9.0
    },
    {
        title: "The Dark Knight Rises",
        year: 2012,
        director: "Christopher Nolan",
        imdbRating: 8.5
    }
];

// Get movie titles.
const titles = movies => movies.map(x => x.title);

// Test functions
const byNolan = movie => movie.director === "Christopher Nolan";
const goodRating = movie => movie.imdbRating > 7.5;

// Filter function
const filter = (movies, func) => movies.filter(func);

// Get movies by Christopher Nolan.
const nolanMovies = (movies) => filter(movies, byNolan);

// Get movie titles with IMDB rating greater or equal to 7.5.
const bestTitles = (movies) => filter(movies, goodRating);

// Build an array of ratings
const ratings = (movies) => movies.map(x => x.imdbRating);
// Compute the average of generic array elements (that supports addition)
const average = (array) => array.reduce((sum, value) => sum + value, 0) / array.length;

// Show movie titles older than year 2000
const olderThan2000 = movie => movie.year < 2000;


// Demo usage.
console.log("===>>> Movie Titles");
console.log(titles(movieList));

const nolanMovieList = nolanMovies(movieList);
console.log("===>>> Movies by Chtistopher Nolan");
console.log(nolanMovieList);

console.log("===>>> Best titles");
console.log(titles(bestTitles(movieList)));

console.log("===>>> Average Rating of Nolan movies");
console.log(average(ratings(nolanMovieList)));

console.log("===>>> Movies older than 2000");
console.log(titles(filter(movieList, olderThan2000)));