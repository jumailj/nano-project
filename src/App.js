import React from "react";
import ".//App.css";

import AlphabetCardContainer from "./AlphabetCardContainer";
import Header from "./Header";
// import "./AlphabetCardContainer.css";

const App = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px 20px 20px 20px" }}>
      <Header />
      <AlphabetCardContainer />
    </div>
  );
};

export default App;
