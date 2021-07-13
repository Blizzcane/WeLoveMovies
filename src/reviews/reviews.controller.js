const services = require("./reviews.services");

async function read(req, res, next) {
  const { movieId } = req.params;

  res.json({ data: await services.readMovieReviews(movieId) });
}
async function reviewExists(req, res, next) {
  const { reviewId } = req.params;
  const review = await services.read(Number(reviewId));

  // console.log("reviewId",reviewId);
  // console.log("review", review);
  if (review) {
    res.locals.review = review;
    return next();
  }
  next({
    status: 404,
    message: "Review cannot be found.",
  });
}

async function destroy(req, res) {
  const { review_id } = res.locals.review;
  await services.delete(Number(review_id));
  res.sendStatus(204);
}

async function update(req, res) {
  const { review_id, critic_id } = res.locals.review;

  const updatedReview = {
    ...req.body.data,
    review_id: res.locals.review.review_id,
  };
  // console.log("upR", updatedReview);
  await services.update(updatedReview);
  const review = await services.read(Number(review_id));

  const reviewToReturn = {
    ...review,
    updated_at: "string",
    created_at: "string",
    critic: await services.getCritics(Number(critic_id)),
  };
  res.json({ data: reviewToReturn });
}

module.exports = {
  update: [reviewExists, update],
  delete: [reviewExists, destroy],
  read,
};
