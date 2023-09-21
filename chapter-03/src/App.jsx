import "./App.css";
import AxiosApi from "./components/AxiosApi";
import FetchApi from "./components/FetchApi";
import FetchSWR from "./components/FetchSWR";

function App() {
    return (
        <>
            <FetchApi />
            <AxiosApi />
            <FetchSWR />
        </>
    );
}

export default App;
