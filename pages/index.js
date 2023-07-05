//importing react
import { Fragment } from "react";

// importing components
import { Spotlight } from "../components/spotlight/spotlight.js";

export default function SpotlightPage({ artPieceInfo }) {
    console.log("respone form api", artPieceInfo);
    return (
        <Fragment>
            <Spotlight artPieceInfo={artPieceInfo} />
        </Fragment>
    );
}