import styled from 'styled-components';

export const Container = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 10;
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

        font-size: 1rem;
        font-weight: bold;
        letter-spacing: .05rem;

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
        font-size: .9rem;
        height: 52px;
        padding: 0 12px;
        border: none;
        cursor: pointer;
        outline: 0;
        letter-spacing: .05rem;

        &:hover {
            opacity: .95;
        }
    }
`
export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1070px;
    height: 100px;
    margin: 0 auto;
    padding: 0 10px;
    
    margin-bottom: 32px;
    background-color: var(--bg-color);

    > div {
        display: flex;

        > h1 {
            color: var(--white-text);
            cursor: pointer;

            &:last-child {
                margin-left: 24px;
                color: var(--gray-text);
            }

            &:hover {
                color: var(--white-text);
            }
        }

        > input {
            border: none;
            padding: 12px 32px;
            background-color: var(--gray-color);
            border-radius: 2px;
            outline: 0;
            color: var(--white-text);
        }
    }
`
