import styled from 'styled-components';

export const gridSize = 8;
export const Segment = styled.div`
    background-color: ${props => props.color};
    flex-shrink: 0;
    width: ${props => props.width};
    transition: width 0.3s ease;
    ${props => (props.hasPointerCursor ? 'cursor: pointer;' : '')};
    &:first-child {
        border-top-left-radius: ${gridSize / 2}px;
        border-bottom-left-radius: ${gridSize / 2}px;
    }

    &:last-child {
        border-top-right-radius: ${gridSize / 2}px;
        border-bottom-right-radius: ${gridSize / 2}px;
    }
`;
export const InnerSegment = styled.div`
    width: 100%;
    display: flex;
    height: ${props => (props.isCompact ? gridSize / 2 : gridSize)}px;
    &:first-child {
        border-top-left-radius: ${gridSize / 2}px;
        border-bottom-left-radius: ${gridSize / 2}px;
    }

    &:last-child {
        border-top-right-radius: ${gridSize / 2}px;
        border-bottom-right-radius: ${gridSize / 2}px;
    }
`;
