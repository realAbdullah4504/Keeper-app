import React from "react";
import Header from "./Header";
import Area from "./Area";

//import the reactrouter
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  // map iterate over the notes array
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Area />} />
        </Routes>

      </div>
    </Router>
  );
}


export default App;
