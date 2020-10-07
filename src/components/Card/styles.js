import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;

    > h1 {
        color: var(--white-text);
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 4px;
    }

    > h2 {
        color: var(--gray-text);
        font-size: 1.4rem;
        font-weight: 400;
        margin-bottom: 8px;
    }

    > span {
        color: var(--white-text);
        font-size: 1.6rem;
        font-weight: 500;
    }
`;

export const Image = styled.div`
    height: 257px;
    background-image: url('https://upload.wikimedia.org/wikipedia/pt/thumb/0/06/TW3_Wild_Hunt.png/270px-TW3_Wild_Hunt.png');
    background-position: center;
    background-size: cover;
    border-radius: 3px;
    margin-bottom: 16px;

    &:hover {
        opacity: .85;
    }
`;
