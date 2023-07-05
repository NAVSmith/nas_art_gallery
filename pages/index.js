//importing react
import { Fragment } from "react";

// importing components
import { Spotlight } from "../components/spotlight/spotlight.js";

export default function SpotlightPage({    
    artPieceInfo
}) {
    console.log("respone form api", artPieceInfo);
    return (
        <Fragment>
            <Spotlight 
            artPieceInfo={artPieceInfo}
          />
        </Fragment>
    );
}

/*
 Move the data fetching logic to pages/_app
 Find a solution for global state handling to have the art pieces available on all pages
 Adapt the page pages/index: rename the function to SpotlightPage and have it render only the Spotlight component
 Create the page pages/art-pieces/index that renders the ArtPieces component
 Create the component Navigation that renders all navigation links
 Create the component Layout that renders the Navigation component
 Apply the Layout component in pages/_app
 All acceptance criteria marked with 🖼️ are covered by component testing

*/
