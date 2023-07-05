// third party react and next
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
// third party style
import styled from "styled-components";

// import components
import { FavoriteButton } from "../favorite_button/favorite_button";

// random index creator
function getARandomPiece(data) {
    return Math.floor(Math.random() * data.length);
}

export function Spotlight({ artPieceInfo }) {
    const index = getARandomPiece(artPieceInfo);

    const spotlightpiece = artPieceInfo[index];
    console.log("spotlight", spotlightpiece);
    return (
        <Fragment>
            <h1>{spotlightpiece.name}</h1>
            <Wrapper>
                <ImageContainer>
                    <FavoriteButtonContainer>
                        <FavoriteButton />
                    </FavoriteButtonContainer>
                    <Link
                        href={"/art-pieces/" + spotlightpiece.slug}
                        passHref={true}
                        // target="_black"
                    >
                        <Image
                            style={{
                                objectFit: "cover"
        
                            }}
                            src={spotlightpiece.imageSource} // Replace with the path to your image
                            alt={spotlightpiece.slug}
            
                            fill 
                            sizes="70vw,
                            30vw,
                            25vw"
                        />
                    </Link>
                </ImageContainer>
            </Wrapper>
        </Fragment>
    );
}

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 25rem;
`;

const Wrapper = styled.div`
    text-align: center;
    display: grid;
    place-items: center;
`;

const FavoriteButtonContainer = styled.div`
    position: absolute;
    top: 1rem;
    right: 3rem;
    z-index: 10;
`;
