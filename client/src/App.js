import React from "react";
import "./App.css";
import Header from "./componets/Header";
import Note from "./componets/Note";
import Footer from "./componets/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Note/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
