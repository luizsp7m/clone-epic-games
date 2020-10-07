import styled from 'styled-components';

export const Container = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
`;

export const Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--gray-color);
    height: 52px;

    font-size: 1.2rem;
    font-weight: 500;
`

export const Left = styled.div`
    display: flex;
    align-content: center;

    > a {
        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;
        color: var(--gray-text);
        text-transform: uppercase;
        height: 52px;
        padding: 0 16px;

        &:hover {
            color: var(--white-text);
        }
    }
`

export const Right= styled.div`
    display: flex;
    align-content: center;

    > a {
        display: flex;
        flex-direction: row;
        align-items: center;

        text-decoration: none;
        color: var(--gray-text);
        text-transform: uppercase;
        padding: 0 16px;

        &:hover {
            color: var(--white-text);
        }

        > img {
            height: 16px;
            margin-right: 12px;
        }
    }

    > button {
        background-color: var(--blue-color);
        color: var(--white-text);
        text-transform: uppercase;
        font-size: 1rem;
        height: 52px;
        padding: 0 12px;
        border: none;
        cursor: pointer;
        outline: 0;

        &:hover {
            opacity: .95;
        }
    }
`