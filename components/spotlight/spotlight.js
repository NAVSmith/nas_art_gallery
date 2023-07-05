// third party react and next
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
// third party style
import styled from "styled-components";

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
            <div>
                <Link
                    href={"/art-pieces/" + spotlightpiece.slug}
                    passHref={true}
                >
                    <Image
                        style={{ objectFit: "cover" }}
                        src={spotlightpiece.imageSource} // Replace with the path to your image
                        alt={spotlightpiece.slug}
                        width={500} // Specify the desired width of the image
                        height={300} // Specify the desired height of the image
                    />
                </Link>
            </div>
        </Fragment>
    );
}
