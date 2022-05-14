export function Home() {
    return (
        <div>
            <h2>
                Select a link to begin.
            </h2>
        </div>
        );
}

export function Reviews() {
    const posterPrefix = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
    return (
        <div>
            <h1>
                This is the movies page { posterPrefix }
            </h1>
            <img src="img_girl.jpg" alt="Girl in a jacket"></img>
        </div>
    );
}

export function AddReview() {
    return (
        <div>
            <h1>
                This is the add movie page
            </h1>
        </div>
    );
}

export function UhOh404() {
    return (
        <div>
            <h2>
                There's nothing here. Try one of the links.
            </h2>
        </div>
    );
}