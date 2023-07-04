
// third party react and next
import { Fragment } from "react";
// third party style
import styled from "styled-components";

// local imports 
import { StuckPreview } from "../kunst_preview/kunst_preview.js";

export function KunstStuecke({ stuecke }) {
    console.log(stuecke);
    return (
        <ArtList>
            {/* start iterating to create the art pieces  */}
            {stuecke &&
                stuecke.map((stuck) => {
                    console.log(stuck.slug);
                    return (
                        <ArtEntry key={stuck.slug}>
                            <StuckPreview
                                title={stuck.name}
                                artistName={stuck.artist}
                                imageUrl={stuck.imageSource} 
                                slug={stuck.slug}                               
                            />
                        </ArtEntry>
                    );
                })}
        </ArtList>
    );
}

const ArtList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: space-around;
  ;
`;

const ArtEntry = styled.li`
    width: 25rem;
    /* min-width: 10rem; */
    height: 25rem;
`

