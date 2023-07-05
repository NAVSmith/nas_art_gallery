//import style
import styled from "styled-components";

//import next and react functions
import { useRouter } from "next/router.js";
import { Fragment } from "react";

//import components
import { Navig } from "../navigation/navigation";

export function PagesLayout({ children }) {

    return (
        <Fragment>
            <Navig/>
            { children }
        </Fragment>
    )
}