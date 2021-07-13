const knex = require("../db/connection");

//lists all theaters
function list() {
  return knex("theaters").select("*");
}

//gets all the movies for the selected theater
function moviesList(theater) {
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "mt.movie_id", "m.movie_id")
    .select("m.*")
    .where({ "t.theater_id": theater.theater_id });
}

module.exports = { list, moviesList };
