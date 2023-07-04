// third party react and next
import { Fragment } from "react";
// third party style
import styled from "styled-components";

// importing components
import { PiecePreview } from "../piece_preview/piece_preview.js";

export function ArtPieces({ artPieceInfo }) {
    console.log('in the art pieces',artPieceInfo);
    return (
        <ArtList>
            {/* start iterating to create the art pieces  */}
            {artPieceInfo &&
                artPieceInfo.map((piece) => {
                    return (
                        <ArtEntry key={piece.slug}>
                            <PiecePreview
                                title={piece.name}
                                artistName={piece.artist}
                                imageUrl={piece.imageSource}
                                slug={piece.slug}
                            />
                        </ArtEntry>
                    );
                })}
        </ArtList>
    );
}

const ArtList = styled.ul`
    list-style: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: space-around;
`;

const ArtEntry = styled.li`
    width: 25rem;
    /* min-width: 10rem; */
    height: 25rem;
`;
