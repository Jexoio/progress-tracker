import styled from 'styled-components';
import { colors } from '@atlaskit/theme';

export const gridSize = 8;
export const ProgressBarContainer = styled.div`
    background-color: ${colors.N40};
    border-radius: ${gridSize / 2}px;
    display: flex;
    height: ${props => (props.isCompact ? gridSize / 2 : gridSize)}px;
    overflow: hidden;
    width: 100%;
`;
