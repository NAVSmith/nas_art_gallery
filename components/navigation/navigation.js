//import react and next components
import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// import styles
import styled from "styled-components";


const pages = [
    {
        slug: "spotlight",
        pathTo: "/",
        name: "Spotlighed Piece",
    },
    {
        slug: "art-pieces",
        pathTo: "/art-pieces",
        name: "Gallrey",
    },
    {
        slug: "favorites",
        pathTo: "/favorites",
        name: "Favorite Gallery",
    },
];



export function Navig({}) {
    // import the router
    const router = useRouter();
    return (
        <Fragment>
            <nav>
                <NavList>
                    {pages.map((page) => (
                        <li key={page.slug}>
                            {page.pathTo === router.pathname ? (
                                <span>{page.name}</span>
                            ) : (
                                <Link href={page.pathTo}>{page.name}</Link>
                            )}
                        </li>
                    ))}
                </NavList>
            </nav>
        </Fragment>
    );
}

const NavList = styled.ul`
    list-style: none;

    display: flex;
    justify-content: space-around;
    align-items: center;

    height: 100%;

    gap: 0.9rem;
    margin: 1;
    padding-left: 0;
`;
