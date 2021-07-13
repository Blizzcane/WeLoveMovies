const knex = require("../db/connection");

function destroy(reviewId) {
  return knex("reviews").where({ review_id: reviewId }).del();
}

function read(reviewId) {
  return knex("reviews").select("*").where({ review_id: reviewId }).first();
}

function readMovieReviews(movieId) {
  return knex("reviews")
  .where({ movie_id: movieId })
  .then((reviews) => Promise.all(reviews.map(setCritic)));
}

function readCritic(criticId) {
  return knex("critics").select("*").where({ critic_id: criticId }).first();
}

function getCritics(criticId) {
  return knex("critics").select("*").where({ critic_id: criticId }).first();
}

function update(updatedReview) {
  // console.log("servicesUpR:", updatedReview);
  return knex("reviews")
    .select("*")
    .where({ review_id: updatedReview.review_id })
    .update(updatedReview, "*")
    .then((review) => {
      // console.log(review[0]);
      review[0];
    });
}
//used to set critics for movie reviews.
async function setCritic(review) {
  review.critic = await readCritic(review.critic_id);
  return review;
}

module.exports = {
  readMovieReviews,
  delete: destroy,
  read,
  update,
  getCritics,
  readCritic
};
