
import React from "react";

function Home() {
  const username = "Liza";
  const city = "New York";

  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;