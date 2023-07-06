// import components
import { Fragment } from "react";
import { ArtPieces } from "../../components/pieces/pieces.js";
// import styles
import styled from "styled-components";

export default function FavoriteArtPieces({
    artPieceInfo,
    handleToggleFavorite,
}) {
    return (
        <Fragment>
            <ArtPieces
                artPieceInfo={artPieceInfo}
                handleToggleFavorite={handleToggleFavorite}
            />
        </Fragment>
    );
}
