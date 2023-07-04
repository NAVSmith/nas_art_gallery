// third party react and next
import { Fragment } from "react";
import Image from "next/image";
// third party style
import styled from "styled-components";

// random index creator
function getARandomKunst(data) {
    return Math.floor(Math.random() * data.length );
}

export function Spotlight({ stuecke, kunstStueckeData, kunstDataSeter }) {
    const index = getARandomKunst(stuecke);

    const spotlightStuck = stuecke[index];
    console.log('spotlight', spotlightStuck);
    return (
        <Fragment>
            <h1>{spotlightStuck.name}</h1>
            <div>
                <Image
                    style={{ objectFit: "cover" }}
                    
                    src={spotlightStuck.imageSource} // Replace with the path to your image
                    alt={spotlightStuck.slug}
                    width={500} // Specify the desired width of the image
                    height={300} // Specify the desired height of the image
                />
            </div>
        </Fragment>
    );
}
