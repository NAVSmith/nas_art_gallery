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

/*
User Story 4: Art Piece Details Page

Value Proposition

As an art enthusiast

I want to be able to see the full art piece with detail information

so that I can learn everything about the piece.

Acceptance Criteria

 Clicking an art piece from the list shows the detail page
 The art piece image is displayed 🖼️
 The art piece title is displayed 🖼️
 The art piece artist is displayed 🖼️
 The art piece year is displayed 🖼️
 The art piece genre is displayed 🖼️
 A back-button is displayed 🖼️
 Clicking the back-button shows the list view
Tasks

 Create the component ArtPieceDetails
 ArtPieceDetails props: image, title, artist, year, genre
 Create the page pages/art-pieces/[slug] that renders ArtPieceDetails
 Read the query parameter slug from next/router
 Use the slug to find the art piece to display
 All acceptance criteria marked with 🖼️ are covered by component testing


*/
