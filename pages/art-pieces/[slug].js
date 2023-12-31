// import components
import { FavoriteButton } from "/components/favorite_button/favorite_button.js";

//import react and next
import { Fragment } from "react";
import { useRouter } from "next/router";
// import styles
import styled from "styled-components";
import Image from "next/image";

export default function ArtPieceDetails({
    artPieceInfo,
    handleToggleFavorite,
}) {
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
                <Title>{calledPiece.name}</Title>
                <Artist>{calledPiece.artist}</Artist>
                <ImageContainer>
                    <FavoriteButtonContainer>
                        <FavoriteButton
                            slug={calledPiece.slug}
                            handleToggleFavorite={handleToggleFavorite}
                            artPieceInfo={artPieceInfo}
                            isFavorite={calledPiece.isFavorite}
                        />
                    </FavoriteButtonContainer>
                    <Imagestyle
                        src={calledPiece.imageSource}
                        alt={calledPiece.name}
                        width={450} // Specify the desired width of the image
                        height={300} // Specify the desired height of the image
                    />
                </ImageContainer>
                <Info>Year: {calledPiece.year}</Info>
                <Info>Genre: {calledPiece.genre}</Info>
                <ColorList>
                    {calledPiece.colors.map((color, i) => {                    
                        return (
                            <Fragment key={i}>
                                <li style={{backgroundColor: color, width: '3rem', height: '3rem', borderRadius: '95%', border: '1px solid #000'}}></li>
                            </Fragment>
                        )

                    })} 
                </ColorList>
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
    justify-content: center;
    position: relative;
    height: 100%;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Imagestyle = styled(Image)`
    object-fit: cover;
`;

const Title = styled.h2`
    font-size: 2rem;
    margin-bottom: 8px;
`;

const Artist = styled.h2`
    font-size: 1.6rem;
    margin-bottom: 8px;
`;

const Info = styled.p`
    margin-bottom: 4px;
`;

const Button = styled.button`
    padding: 1rem 2rem;
    background-color: #f0ead6;
    color: #333;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
`;

const FavoriteButtonContainer = styled.div`
    position: relative;
    top: 4rem;
    right: -12rem;
    z-index: 10;
`;

export const ColorList = styled.ul`
    list-style: none;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 0;
`;
