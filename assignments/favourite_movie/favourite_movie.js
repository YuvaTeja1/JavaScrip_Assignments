const movies = [];

function favouriteMovie(operation, movie) {
    // Write your code here 
    if (operation === "add"){ 
        movies.push(movie)  //[inception,lucy]
    }
    if (operation === "remove"){
        movies.pop()
    }
    return movies //inception
}

module.exports = favouriteMovie;
