//importing react
import { Fragment } from "react";

// importing components
import { Spotlight } from "../components/spotlight/spotlight.js";

// random index creator
function getARandomPiece(data) {
  return Math.floor(Math.random() * data.length);}


export default function SpotlightPage({ artPieceInfo, handleToggleFavorite }) {
    console.log("respone form api", artPieceInfo);

    const index = getARandomPiece(artPieceInfo);

    const spotlightPiece = artPieceInfo[index];
    return (
        <Fragment>
            <Spotlight
                artPieceInfo={artPieceInfo}
                handleToggleFavorite={handleToggleFavorite}
                spotlightPiece={spotlightPiece}
            />
        </Fragment>
    );
}
