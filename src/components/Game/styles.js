import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 16px;
    margin-bottom: 32px;
    
    > h1 {
        color: var(--white-text);
        font-size: 1.6rem;
        font-weight: 600;
        margin-bottom: 16px;
    }
`;

export const Panel = styled.div`
    display: grid;
    grid-template-columns: 50fr 50fr;
    background-color: ${props => props.cor};
    padding: 50px 70px;
    border-radius: 5px;
    height: 392px;

    > div {
        &:last-child {
            display: flex;
            justify-content: flex-end;
        }

        > h1 {
            color: var(--white-text);
            font-size: 2.5rem;
            font-weight: 600;
            margin-bottom: 20px;
        }

        > p {
            font-size: 1.3rem;
            width: 70%;
            color: var(--gray-text);
            margin-bottom: 20px;
            font-weight: 600;
        }

        > button {
            border: none;
            padding: 18px 48px;
            border-radius: 3px;
            text-transform: uppercase;
            font-size: 1rem;
            background-color: rgba(255,255,255,.2);
            font-weight: bold;
            color: var(--white-text);
            cursor: pointer;
            outline: 0;

            &:hover {
                background-color: rgba(255,255,255,.25);
            }
        }

        > img {
            width: 130%;
            position: relative;
            top: -100px;
            right: -95px;
        }
    }
`;
