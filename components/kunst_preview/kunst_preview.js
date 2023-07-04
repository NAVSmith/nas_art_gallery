import Image from "next/image";
import { Fragment } from "react";
import styled from "styled-components";

export function StuckPreview({ title, artistName, imageUrl, slug }) {
    return (
        <Fragment>
            <Fig>
                <ImgContain>
                    <Image
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                        src={imageUrl} // Replace with the path to your image
                        alt={slug}
                        width={500} // Specify the desired width of the image
                        height={300} // Specify the desired height of the image
                    />
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
    background-color: rgba(118, 100, 0, 0.954);
    color: #f0ead6;
    padding: 0.5rem 0.3rem;
`;
