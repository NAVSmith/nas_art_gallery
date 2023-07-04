import { Fragment } from "react";
import GlobalStyle from "../styles";
import useSWR from "swr";

// fetcher from api
async function fetcherFunc(...arg) {
    console.log("start fetching the data");
    const res = await fetch(...arg);
    return await res.json();
}

export default function App({ Component, pageProps }) {
    const { data, isLoading, error } = useSWR(
        "https://example-apis.vercel.app/api/art",
        fetcherFunc
    );
    console.log("the data ", data);
    console.log("loading? ", isLoading);
    console.log("the error:", error);
    return (
        <>
            <GlobalStyle />
            <Component
                {...pageProps}
                ArtStuecke={isLoading || error ? [] : data}
            />
        </>
    );
}
