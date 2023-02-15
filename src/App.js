// in src/App/App.js...
import "./App.css";
import { useState } from "react";

import Header from "./Header/Header";
import EntryBox from "./EntryBox/EntryBox";
import ColorBox from "./ColorBox/ColorBox";

function App() {
    const [rgb, setRGB] = useState([0, 0, 0]);

    return (
        <div className="App">
            <Header />

            <main>
                <EntryBox updateRGB={setRGB} />
                <ColorBox rgb={rgb} />
            </main>
        </div>
    );
}

export default App;