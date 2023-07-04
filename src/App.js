import React from "react";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import RowPost from "./components/rowPost/rowPost";
import { action, horror, orginals } from "./urls";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={orginals} title="Netflix Orginals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
    </div>
  );
}

export default App;
