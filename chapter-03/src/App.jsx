// import { Suspense } from "react";
import { Suspense } from "react";
import "./App.css";
// import AxiosApi from "./components/AxiosApi";
// import FetchApi from "./components/FetchApi";
// import FetchSWR from "./components/FetchSWR";
import Loading from "./components/Loading";
import Query from "./components/Query";

import { QueryClientProvider, QueryClient } from "react-query";

function App() {
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                suspense: true,
            },
        },
    });

    return (
        <>
            {/* <FetchApi />
            <AxiosApi />

            <Suspense fallback={<Loading />}>
                <FetchSWR />
            </Suspense> */}
            <QueryClientProvider client={client}>
                <Suspense fallback={<Loading />}>
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                </Suspense>
            </QueryClientProvider>
        </>
    );
}

export default App;
