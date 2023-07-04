// react imports
import { Fragment } from "react";

// importing styles
import GlobalStyle from "../styles";

// import custom hooks
import { useImmerLocalStorageState } from "../hooks/useImmerLocalStorageState.js";

// importing fetching package
import useSWR from "swr";

// fetcher from api
async function fetcherFunc(...arg) {
    console.log("start fetching the data");
    const res = await fetch(...arg);
    return await res.json();
}

export default function App({ Component, pageProps }) {
    // fetching the art data
    const { data, isLoading, error } = useSWR(
        "https://example-apis.vercel.app/api/art",
        fetcherFunc
    );
    
    // state handling. setting the art pieces data
    const [artPieceInfo, setArtPieceInfo] = useImmerLocalStorageState(
        "artPieceInfo",
        { defaultValue: [] }
    );

    
    
    // if the data is not loaded yet from the api and the state is not populated yet in the local state show load screen
    if (isLoading) {
        return (
            <>
                <div>Loading the data</div>
            </>
        );
    }
    // after it finished to get the the data from the api set set the state and print the page 
    // populating to the initial data into the state
    setArtPieceInfo(data);
    console.log("artPieceInfo", artPieceInfo);
    return (
        <>
            <GlobalStyle />
            <Component
                {...pageProps}
                pieces={data}
                artPieceInfo={artPieceInfo}
            />
        </>
    );
}
