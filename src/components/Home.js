import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Home() {
  const [shows, setShows] = useState(null);
  useEffect(() => {
    const url = "https://api.tvmaze.com/search/shows?q=all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div className="flex-item">
      {shows?.map((show) => (
        <div key={show.score} className="card">
          <img src={show.show.image?.medium} alt="" />
          <div className="child__card">
            <Button className="details__btn"> See Details</Button>{" "}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
