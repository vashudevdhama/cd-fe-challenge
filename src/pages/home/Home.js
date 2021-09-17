import React from "react";
import Colleges from "../../components/colleges/Colleges";
import "./home.css";

function Home() {
  return (
    <main className="container">
      <span className="heading">Colleges in North India</span>
      <Colleges />
    </main>
  );
}

export default Home;
