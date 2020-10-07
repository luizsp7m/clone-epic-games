import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 64px;
    border-radius: 50px;
    cursor: pointer;
`;

export const Panel = styled.div`
    display: grid;
    grid-template-columns: 65fr 35fr;

    @media(max-width: 1024px) {
        display: flex;
        flex-direction: column;
    }
`

export const Column = styled.div`
    &:last-child {
        padding: 16px 32px;
        background-color: var(--gray-color);

        display: flex;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;

        &:hover {
            background-color: rgba(255,255,255,.2);
        }
    };
`

export const Image = styled.div`
    background-image: url('https://cdn2.unrealengine.com/egs-social-zenstudios-castlestorm2-news-2560x1440-085504814.jpg?h=1080&resize=1&w=1920');
    height: 330px;
    background-size: cover;

    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
`

export const Information= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    > span {
        text-transform: uppercase;
        font-size: 1.2rem;
        color: var(--gray-text);
        font-weight: bold;
        margin-bottom: 16px;
    }

    > h1 {
        color: var(--white-text);
        font-size: 1.9rem;
        font-weight: 400;
        margin-bottom: 16px;
    }

    > p {
        width: 85%;
        color: var(--gray-text);
        font-size: 1.4rem;
        margin-bottom: 40px;
    }

    > a {
        color: var(--white-text);
        font-weight: 600;
        font-size: 1.4rem;
        text-decoration: none;
        
    }
`
