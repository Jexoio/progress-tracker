import React, { Component } from 'react';
import Tooltip from '@atlaskit/tooltip';
import PropTypes from 'prop-types';
import { Segment, InnerSegment } from './styled';

export default class ProgressBarSegment extends Component {
    static propTypes = {
      color: PropTypes.string,
      proportion: PropTypes.number,
      tooltip: PropTypes.string,
      isCompact: PropTypes.bool
    }

    static defaultProps = {
      color: '#0052CC',
      proportion: 0,
      tooltip: null,
      isCompact: false
    };

    render() {
      const {
        color,
        proportion,
        tooltip,
        isCompact
      } = this.props;
      const width = proportion > 0 ? `${proportion * 100}%` : '0';

      if (!tooltip) {
        return <Segment color={color} width={width} />;
      }

      return(
        <Segment color={color} width={width}>
          <Tooltip content={tooltip} position="top"><InnerSegment isCompact={isCompact}/></Tooltip>
        </Segment>
      )
    }
}
