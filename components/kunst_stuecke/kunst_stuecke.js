import { Fragment } from "react";
import styled from "styled-components";

import { StuckPreview } from "../kunst_preview/kunst_preview.js";

export function KunstStuecke({ stuecke }) {
    console.log(stuecke);
    return (
        <ul>
            {/* start iterating to create the art pieces  */}
            {stuecke &&
                stuecke.map((stuck) => {
                    console.log(stuck.slug);
                    return (
                        <li key={stuck.slug}>
                            <StuckPreview
                                title={stuck.name}
                                artistName={stuck.artist}
                                imageUrl={stuck.imageSource} 
                                slug={stuck.slug}                               
                            />
                        </li>
                    );
                })}
        </ul>
    );
}
