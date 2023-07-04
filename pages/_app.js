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
    console.log("the data ", data);
    console.log("loading? ", isLoading);
    console.log("the error:", error);
    // state handling. setting the art pieces data
    const [kunstStueckeData, setKunstStueckeData] = useImmerLocalStorageState(
        "kunstStueckeData",
        { defaultValue: [] }
    );

    // populating to the intial data into the state
    setKunstStueckeData(data);
    console.log("kunstStueckeData", kunstStueckeData);
// if the data is not loaded yet from the api and not no pupolated in the local state show load screen
    if (isLoading || !kunstStueckeData) {
        return (
            <>
                <div>Loading the data</div>
            </>
        );
    }
    return (
        <>
            <GlobalStyle />
            <Component
                {...pageProps}
                stuecke={data}
                kunstStueckeData={kunstStueckeData}
                kunstDataSeter={setKunstStueckeData}
            />
        </>
    );
}
