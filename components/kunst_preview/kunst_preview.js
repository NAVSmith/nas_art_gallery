import Image from "next/image";
import { Fragment } from "react";
import styled from "styled-components";

export function StuckPreview({ title, artistName, imageUrl ,slug}) {
    return (
        <Fragment>
            <figure>
            <figcaption> 
            {`${artistName}: ${title}`}
            </figcaption>
                <div className="ImgContainer">
                    <Image
                        src={imageUrl} // Replace with the path to your image
                        alt={slug}
                        width={500} // Specify the desired width of the image
                        height={300} // Specify the desired height of the image
                    />
                </div>
            </figure>
        </Fragment>
    );
}
