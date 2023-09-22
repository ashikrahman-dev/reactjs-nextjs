import { Suspense } from "react";
import "./App.css";
import AxiosApi from "./components/AxiosApi";
import FetchApi from "./components/FetchApi";
import FetchSWR from "./components/FetchSWR";
import Loading from "./components/Loading";

function App() {
    return (
        <>
            <FetchApi />
            <AxiosApi />

            <Suspense fallback={<Loading />}>
                <FetchSWR />
            </Suspense>
        </>
    );
}

export default App;
