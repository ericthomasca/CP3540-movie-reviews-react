import reviewData from "./reviews.json";

export function Home() {
  const posterPrefix = "https://image.tmdb.org/t/p/original";

  const getIndex = (arr, prop, value) => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
  };

  const remove = (id) => {
    delete reviewData[getIndex(reviewData, "id", id)];
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Movie</th>
            <th>Release Date</th>
            <th>Actors</th>
            <th>Poster</th>
            <th>Rating</th>
            <th>Remove?</th>
          </tr>
        </thead>
        <tbody>
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
              <td>{review.rating}</td>
              <td>
                <button
                  onClick={
                    delete reviewData[getIndex(reviewData, "name", review.name)]
                  }
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function AddReview() {
  const submit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label>Title: </label>
        <br></br>
        <input type="text"></input>
        <br></br>
        <label>Release Date: (YYYY-MM-DD) </label>
        <br></br>
        <input type="text"></input>
        <br></br>
        <label>Actors: </label>
        <br></br>
        <input type="text"></input>
        <br></br>
        <label>Poster: </label>
        <select>
          <option value="/5cZySBvy41eHTD5LyQn48aP444k.jpg">Example 1</option>
          <option value="/5mq8J11266ZL7HCOwDGXoaU6eIO.jpg">Example 2</option>
        </select>
        <br></br>
        <label>Rating: </label>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
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
