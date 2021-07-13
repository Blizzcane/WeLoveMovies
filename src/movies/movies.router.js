const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const theaterRouter = require("../theaters/theaters.router");
const reviewsRouter = require("../reviews/reviews.router");

router.use("/:movieId/theaters", theaterRouter).all(methodNotAllowed);
router.use("/:movieId/reviews", reviewsRouter).all(methodNotAllowed);
router.route("/").get(controller.list).all(methodNotAllowed);
router.route("/:movieId").get(controller.read).all(methodNotAllowed);

module.exports = router;
