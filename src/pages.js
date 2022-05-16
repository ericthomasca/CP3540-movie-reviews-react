import reviewData from "./reviews.json";

export function Home() {
  const posterPrefix = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <table>
        <tr>
          <th>Movie</th>
          <th>Release Date</th>
          <th>Actors</th>
          <th>Poster</th>
          <th>Rating</th>
        </tr>
        {reviewData.map((review) => (
          <tr key={review.id}>
            <td>{review.name}</td>
            <td>{review.release_date}</td>
            <td>{review.actors.join(", ")}</td>
            <td>
              <img
                src={posterPrefix + review.poster}
                alt="poster"
                height="150"
                width="100"
              ></img>
            </td>
            <td>{review.rating}</td>{" "}
          </tr>
        ))}
      </table>
    </div>
  );
}

export function AddReview() {
  return (
    <div>
      <h2>This is the add movie page</h2>
    </div>
  );
}

export function UhOh404() {
  return (
    <div>
      <h2>There's nothing here. Try one of the links.</h2>
    </div>
  );
}
