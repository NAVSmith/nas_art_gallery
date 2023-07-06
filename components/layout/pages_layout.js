//import style
import styled from "styled-components";
import Head from "next/head.js";

//import next and react functions
import { useRouter } from "next/router.js";
import { Fragment } from "react";
import { useEffect, useRef } from "react";


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
                    <title>NAS Art Gallery</title>
                </Head>
                <HeadTitle>Art Gallery</HeadTitle>
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

const HeadTitle = styled.h2`
    text-align: center;
    color: brown;
`;
