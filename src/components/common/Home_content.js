// import React from "react";
import React, { useEffect, useState } from "react";
//Component
import Card from "./Card";
import Mini_side_bar from "../../components/common/Mini_side_bar";
//cards pic

const Home_content = ({ checking2 }) => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "dac17e9298msh2a58d5c5f481f7ap194a76jsn3854dcc2f3d2",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    fetch(
      "https://imdb8.p.rapidapi.com/actors/get-all-videos?nconst=nm0001667&region=US",

      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovieList(response.resource.videos);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className={checking2 ? "content_div" : "content_div2"}>
        <Mini_side_bar check={checking2} />

        <div className="margin"></div>
        <div className="horizontal_row">
          {movieList.map((movie) => (
            <Card
              pic={movie.image.url}
              durationInSeconds={movie.durationInSeconds}
              title={movie.title}
              logo={movie.primaryTitle.image.url}
              description={movie.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home_content;
