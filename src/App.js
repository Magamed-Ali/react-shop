import React from "react";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Footer from "./Layout/Footer";
import {ContextProvider} from "./context";

function App() {
  return (
    <div className="App">
        <Header/>
        <ContextProvider>
            <Main/>
        </ContextProvider>
        <Footer/>
    </div>
  );
}

export default App;
