// third party react and next
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
// third party style
import styled from "styled-components";

// import components
import { FavoriteButton } from "../favorite_button/favorite_button";

export function Spotlight({
    artPieceInfo,
    handleToggleFavorite,
    spotlightPiece,
}) {
    return (
        <Fragment>
            <HeadTitle>{spotlightPiece.name}</HeadTitle>
            <Wrapper>
                {/* <Fragment>
                    <FavoriteButtonContainer>
                        <FavoriteButton
                            slug={spotlightPiece.slug}
                            artPieceInfo={artPieceInfo}
                            handleToggleFavorite={handleToggleFavorite}
                            isFavorite={spotlightPiece.isFavorite}
                        />
                    </FavoriteButtonContainer>
                </Fragment> */}
                <ImageContainer>
                    <Link
                        href={"/art-pieces/" + spotlightPiece.slug}
                        passHref={true}
                        // target="_black"
                    >
                        <Image
                            style={{
                                objectFit: "cover",
                            }}
                            src={spotlightPiece.imageSource} // Replace with the path to your image
                            alt={spotlightPiece.slug}
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

const HeadTitle = styled.h1`
    text-align: center;
`;
