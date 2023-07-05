import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import styled from "styled-components";

// import components
import { FavoriteButton } from "../favorite_button/favorite_button";

export function PiecePreview({ title, artistName, imageUrl, slug }) {
    return (
        <Fragment>
            <Fig>  
            
                
                    <ImgContain>
                    <FavoriteButtonContainer>
                    <FavoriteButton />
            </FavoriteButtonContainer>   
                    <Link href={"/art-pieces/" + slug} passHref={true}>     
                        <Image
                            style={{ objectFit: "cover" }}                 
                            src={imageUrl} // Replace with the path to your image
                            alt={slug}
                            width={450} // Specify the desired width of the image
                            height={300} // Specify the desired height of the image
                        />
                        </Link>
                    </ImgContain>
                    <Cap>{`${artistName}: ${title}`}</Cap>
                
            </Fig>
        </Fragment>
    );
}

const ImgContain = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const Fig = styled.figure`
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
`;

const Cap = styled.figcaption`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(118, 100, 0, 0.654);
    color: #f0ead6;
    padding: 0.5rem 0.3rem;
`;

const FavoriteButtonContainer = styled.div`
    position: absolute;
    top: 2.3rem;
    right: 0.25rem;
    z-index: 10;
`;