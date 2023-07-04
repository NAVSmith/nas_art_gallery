import { Fragment } from "react";
import { KunstStuecke } from "../components/kunst_stuecke/kunst_stuecke.js";

export default function HomePage({ stuecke }) {
    console.log("respone form api", stuecke);
    return (
        <Fragment>
            <KunstStuecke 
            stuecke={stuecke} />
        </Fragment>
    );
}

/*
Tasks

Acceptance Criteria

 All art pieces are displayed as a list 🖼️
 Each art piece's image is displayed 🖼️
 Each art piece's title is displayed 🖼️
 Each art piece's artist is displayed 🖼️

 Fetch all art pieces with SWR in pages/index.js
 Create the component ArtPieces to render a list
 ArtPieces props: pieces
 Create the component ArtPiecePreview
 ArtPiecePreview props: image, title, artist
 All acceptance criteria marked with 🖼️ are covered by component testing

*/
