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
const titles = movies => {
    // const titles = [];
    // for (const tempMovie of movies) {
    //     titles.push(tempMovie.title);
    // }
    // return titles;
    return movies.map(tempMovie => tempMovie.title);
}

// Get movies by Christopher Nolan.
const nolanMovies = movies => {
    // const nolanMovies = [];
    // for (const tempMovie of movies) {
    //     if (tempMovie.director === "Christopher Nolan") {
    //         nolanMovies.push(tempMovie);
    //     }
    // }
    // return nolanMovies;
    return movies.filter(tempMovie => tempMovie.director === "Christopher Nolan");
}

// Get movie titles with IMDB rating greater or equal to 7.5.
const bestTitles = movies => {
    // const bestTitles = [];
    // for (const tempMovie of movies) {
    //     if (tempMovie.imdbRating >= 7.5) {
    //         bestTitles.push(tempMovie.title);
    //     }
    // }
    // return bestTitles;
    return movies.filter(x => x.imdbRating >= 7.5).map(x => x.title);
}

// Compute the average rating of a movie list.
const averageRating = movies => {
    // let ratingSum = 0;
    // for (const tempMovie of movies) {
    //     ratingSum += tempMovie.imdbRating;
    // }
    const ratingSum = movies.reduce((accumulator, movie) => accumulator + movie.imdbRating, 0);
    return ratingSum/movies.length;
}

// Demo usage.
console.log("===>>> Movie Titles");
console.log(titles(movieList));

const nolanMovieList = nolanMovies(movieList);
console.log("===>>> Movies by Chtistopher Nolan");
console.log(nolanMovieList);

console.log("===>>> Best titles");
console.log(bestTitles(movieList));

console.log("===>>> Average Rating of Nolan movies");
console.log(averageRating(nolanMovieList));