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

    @media(max-width: 889px) {
        justify-content: flex-end;
    }
`

export const Left = styled.div`
    display: flex;
    align-content: center;

    .active {
        color: var(--white-text);
        border-bottom: 4px solid var(--blue-color);
    }

    > a {
        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;
        color: var(--gray-text);
        text-transform: uppercase;
        height: 52px;
        padding: 4px 16px 0px 16px;
        border-bottom: 4px solid var(--gray-color);

        &:hover {
            color: var(--white-text);
            border-bottom: 4px solid var(--blue-color);
        }
    }

    @media(max-width: 890px) {
        display: none;
    }
`

export const Right = styled.div`
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

    @media(max-width: 890px) {
        display: none;
    }
`
export const MenuToggle = styled.div`
    .menu-toggle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        background: var(--blue-color);
        height: 52px;
        width: 52px;
        outline: 0;
        cursor: pointer;

        span {
            width: 36px;
            height: 4px;
            margin: 2px 0;
            background-color: #fff;
        }

        span:last-child {
            margin-bottom: 0;
        }
    }

    @media(min-width: 889px) {
        display: none;
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
