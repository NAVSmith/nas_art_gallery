// import components
import { Fragment } from "react";
import { ArtPieces } from "../../components/pieces/pieces.js";

export default function AllArtPieces({ artPieceInfo, handleToggleFavorite }) {
    console.log(artPieceInfo);
    const favoriteArtPieces = artPieceInfo.slice().filter(piece => piece.isFavorite === true)
    console.log(favoriteArtPieces);
    return (
        <Fragment>
            <ArtPieces
                artPieceInfo={favoriteArtPieces}
                handleToggleFavorite={handleToggleFavorite}
            />
        </Fragment>
    );
}
