//import style
import styled from "styled-components";

//import next and react functions
import { useRouter } from "next/router.js";
import { Fragment } from "react";
import { useEffect, useRef } from "react";
import Head from "next/head.js";

//import components
import { Navig } from "../navigation/navigation";

export function PagesLayout({ children }) {
    const { pathname } = useRouter();
    const scrollRef = useRef();

    useEffect(() => {
        scrollRef.current.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Fragment>
            <Wrapper>
                <Head>
                    <title>Art Gallery</title>
                </Head>
                <Headline>Art Gallery</Headline>
                <Main ref={scrollRef}>{children}</Main>
                <Navig />
            </Wrapper>
        </Fragment>
    );
}

const Wrapper = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 5rem auto 4rem;
`;

const Main = styled.main`
    overflow-y: scroll;
`;

const Headline = styled.h1`
    text-align: center;
`;
