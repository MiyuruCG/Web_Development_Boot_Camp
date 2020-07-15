import React from "react";
import ReactDOM from "react-dom";

import Footer from "./Footer.jsx";
import Header from "./Header";
import Note from "./Note";

function App() {
    return (
        <div>
            <Header />
            <Note />
            <Footer />
        </div>
    );
}

export default App;