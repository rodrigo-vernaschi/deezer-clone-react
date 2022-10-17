import "./App.css";
import Menu from "./components/Menu";
import SearchBar from "./components/SearchBar";
import BottomBar from "./components/BottomBar";
import Flow from "./components/Flow";
import Mixes from "./components/Mixes";

function App() {
    return (
        <div className="App">
            <div className="d-flex">
                <Menu />
                <div>
                    <SearchBar />
                    <div id="content_container">
                        <div id="content">
                            <Flow />
                            <Mixes />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <BottomBar />
            </div>
        </div>
    );
}

export default App;
