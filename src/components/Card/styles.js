import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin-bottom: 32px;

    > img {
        width: 100%;
        border-radius: 3px;
        margin-bottom: 16px;

        &:hover {
            opacity: .85;
        }
    }

    > h1 {
        color: var(--white-text);
        font-size: 1.4rem;
        font-weight: 600;
        margin-bottom: 4px;
    }

    > h2 {
        color: var(--gray-text);
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 16px;
        
        max-width: 25ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    > span {
        color: var(--white-text);
        font-size: 1.6rem;
        font-weight: 600;
    }
`;

export const Image = styled.div`
    /* height: 257px;
    background-image: url('https://upload.wikimedia.org/wikipedia/pt/thumb/0/06/TW3_Wild_Hunt.png/270px-TW3_Wild_Hunt.png');
    background-position: center;
    background-size: cover;
    border-radius: 3px;
    margin-bottom: 16px; */

    &:hover {
        opacity: .85;
    }
`;
