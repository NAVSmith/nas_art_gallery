import Image from "next/image.js";
import styled from "styled-components";

export function FavoriteButton({}) {
    return (
        <Button type="button">
            <Image src="/heart.svg" width={36} height={36} alt="favored" />
        </Button>
    );
}

const Button = styled.button`
    border-radius: 50%;
    display: grid;
    place-items: center;
    width: 3.7rem;
    height: 3.7rem;
    padding: 0.2rem 0 0;
    &:hover {
        cursor: pointer;
    }
`;
