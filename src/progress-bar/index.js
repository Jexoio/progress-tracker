import React, { Component, type ChildrenArray, type Element } from 'react';

import Segment from './progress-bar-segment';
import { ProgressBarContainer } from './styled';

type Props = {
    children: ChildrenArray<Element<typeof Segment>> | null,
    isCompact: boolean,
};

export default class ProgressBar extends Component<Props> {
    static defaultProps = {
        children: null,
        isCompact: true,
    };

    render() {
        return (
          <ProgressBarContainer isCompact={this.props.isCompact}>
              {this.props.children}
          </ProgressBarContainer>
        )
    }
}

export { Segment };
