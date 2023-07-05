// import components
import { Fragment } from "react";
import { ArtPieces } from "../../components/pieces/pieces.js";
import { useRouter } from "next/router";
// import styles
import styled from "styled-components";

export default function ArtPieceDetails({ artPieceInfo }) {
    // get the slug of the piece as it a unique identifier
    const router = useRouter();
    const calledPieceSlug = router.asPath.split("/").pop();

    // console.log(router.back());
    const calledPiece = artPieceInfo.find((Piece) => {
        return Piece.slug === calledPieceSlug;
    });


    return (
        <Fragment>
            <Container>
                <Image src={calledPiece.imageSource} alt={calledPiece.name} />
                <Title>{calledPiece.name}</Title>
                <Info>Artist: {calledPiece.artist}</Info>
                <Info>Year: {calledPiece.year}</Info>
                <Info>Genre: {calledPiece.genre}</Info>
                <Button onClick={() => router.back()}>Go Back</Button>
            </Container>
        </Fragment>
    );
}

// Styled components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin-bottom: 16px;
`;

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 8px;
`;

const Info = styled.p`
    margin-bottom: 4px;
`;

const Button = styled.button`
    padding: 8px 16px;
    background-color: #f0ead6;
    color: #333;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 16px;
`;

// Acceptance Criteria

//  Clicking an art piece from the list shows the detail page
//  The art piece image is displayed 🖼️
//  The art piece title is displayed 🖼️
//  The art piece artist is displayed 🖼️
//  The art piece year is displayed 🖼️
//  The art piece genre is displayed 🖼️
//  A back-button is displayed 🖼️
//  Clicking the back-button shows the list view
// Tasks

//  Create the component ArtPieceDetails
//  ArtPieceDetails props: image, title, artist, year, genre
//  Create the page pages/art-pieces/[slug] that renders ArtPieceDetails
//  Read the query parameter slug from next/router
//  Use the slug to find the art piece to display
//  All acceptance criteria marked with 🖼️ are covered by component testing
