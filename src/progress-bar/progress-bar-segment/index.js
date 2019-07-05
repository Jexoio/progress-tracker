import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors } from '@atlaskit/theme';
import Tooltip from '@atlaskit/tooltip';

export default class ProgressBarSegment extends Component {
    static propTypes = {
      color: PropTypes.string,
      proportion: PropTypes.number,
      tooltip: PropTypes.string,
      isCompact: PropTypes.bool
    }

    static defaultProps = {
      color: colors.B400,
      proportion: 0,
      tooltip: null,
      isCompact: false
    };

    render() {
      const {
        tooltip,
        proportion,
        color,
        isCompact
      } = this.props;

      const width = this.props.proportion > 0 ? `${proportion * 100}%` : '0';

      const segmentStyling = {
        backgroundColor: color,
        flexShrink: 0,
        width: width,
        transition: 'width 0.3s ease',
        cursor: 'pointer',
        height: (isCompact) ? 8 / 2 : 8 +'px',
      }

      const segmentInnerStyling = {
        height: (isCompact) ? 8 / 2 : 8 +'px',
        width: '100%'
      }

      if (!tooltip) {
        return <div style={segmentStyling} className="segment" />;
      }

      return(
        <div style={segmentStyling} className="segment">
          <Tooltip content={tooltip}><div style={segmentInnerStyling}></div></Tooltip>
        </div>
      )
    }
}
