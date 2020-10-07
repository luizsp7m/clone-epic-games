import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1150px;
    padding: 0 50px;
    margin: 32px auto;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

export const Releases = styled.div`
    display: flex;
    flex-direction: column;

    > h1 {
        color: var(--white-text);
        font-size: 1.8rem;
        font-weight: 400;
        margin-bottom: 24px;
    }
`;

export const Panel = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(192px, 1fr));
    grid-gap: 15px;
`;