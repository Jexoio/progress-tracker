import React, { Component } from 'react';
import Tooltip from '@atlaskit/tooltip';
import { colors } from '@atlaskit/theme';
import { Segment } from './styled';

type Props = {
    color: string,
    proportion: number,
    tooltip: string | null,
};

export default class ProgressBarSegment extends Component<Props> {
    static defaultProps = {
        color: colors.B400,
        proportion: 0,
        tooltip: null,
    };

    renderSegment() {
      const { color, proportion } = this.props;
      const width = proportion > 0 ? `${proportion * 100}%` : '0';
      return(
        <Segment color={color} width={width} />
      )
    }

    render() {
      if (!this.props.tooltip) {
          return this.renderSegment();
      }

      return <Tooltip content={this.props.tooltip}>{this.renderSegment()}</Tooltip>;
    }
}
