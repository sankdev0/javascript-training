// This is an example of imperative programming,
// may be dangerous and harder to maintain, because state of the program may mutate by mistake.
// Ways to improve an imperative program:
// 1. Use const vars when possible.
// 2. Split the program into functions, see averageNolanRating example.
// The next step is using pure functions - almost functional programming.

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

const titles = [];

for (const movie of movieList) {
    titles.push(movie.title);
}

console.log("===>>> titles");
console.log(titles);

const nolanMovies = [];
for (const movie of movieList) {
    if (movie.director === "Christopher Nolan") {
        nolanMovies.push(movie);
    }
}
let nolanMoviesCount = nolanMovies.length;

console.log("===>>> Number of Nolan movies");
console.log(nolanMoviesCount);

const bestTitles = [];
for (let tmpMovie of movieList) {
    if (tmpMovie.imdbRating > 7.5) {
        bestTitles.push(tmpMovie.title);
    }
}

console.log("===>>> BestMovies");
console.log(bestTitles);

let ratingSum = 0;
let avgRating = 0;

for (let tmpMovie of nolanMovies) {
    ratingSum += tmpMovie.imdbRating;
}
avgRating = ratingSum / nolanMoviesCount;

console.log("===>>> Average rating of the movies by Nolan");
console.log(avgRating);

// Compute average rating of Christopher Nolan's movies
const averageNolanRating = () => {
    let ratingSum = 0;
    for (const movie of nolanMovieList) {
        ratingSum += movie.imdbRating;
    }
    return ratingSum / nolanMovieList.length;
};