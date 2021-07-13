## Reviews

The `reviews` table represents a review done by a critic of a single movie. It references both a critic and a movie.

- `review_id`: (Primary Key) A unique ID for the review.
- `content`: (Text) The content of the review, written in markdown.
- `score`: (Integer) A numerical representation of the score given to the movie by the critic.
- `critic_id`: (Foreign Key) A reference ID to a particular critic.
- `movie_id`: (Foreign Key) A reference ID to a particular movie.

An example record looks like the following:

```json
{
  "review_id": 1,
  "content": "...",
  "score": 4,
  "movie_id": 1,
  "critic_id": 4
}
```
