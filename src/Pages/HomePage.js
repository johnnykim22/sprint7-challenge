import React from "react";
import "./Styles/HomePage.css";

import Banner from "../Components/Banner";
import Favorites from "../Components/Favorites";
function HomePage() {
  return (
    <div className="page">
      <Banner />
      <Favorites />
    </div>
  );
}

export default HomePage;
