import React from "react";

import Footer from "./Footer.jsx";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";



function App() {
    return (
        <div>
            <Header />
            {notes.map((note) =>
                (
                    <Note
                        key={note.id}
                        title={note.title}
                        content={note.content}
                    />
                )
            )}
            <Footer />
        </div>
    );
}

export default App;