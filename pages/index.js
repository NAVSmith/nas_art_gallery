

//importing react 
import { Fragment } from "react";


// importing components
import { KunstStuecke } from "../components/kunst_stuecke/kunst_stuecke.js";

export default function HomePage({ stuecke }) {
    console.log("respone form api", stuecke);
    return (
        <Fragment>
            <KunstStuecke stuecke={stuecke} />
        </Fragment>
    );
}

/*
User Story 2: Spotlight Piece

Value Proposition

As an art enthusiast

I want to see a spotlight piece

so that I can get inspirational highlights.

Acceptance Criteria

 One art piece is picked at random to show as a spotlight piece
 The art piece image is displayed 🖼️
 The art piece artist is displayed 🖼️
Tasks

 Write function to pick one art piece at random
 Create the component Spotlight
 Spotlight props: image, artist


*/
