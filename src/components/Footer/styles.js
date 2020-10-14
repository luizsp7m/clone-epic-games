import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--gray-color);
    height: 52px;

    display: flex;
    justify-content: center;
    align-items: center;

    > span {
        color: var(--gray-text);
        font-size: 1.4rem;
        font-weight: 600;
    }
`;
