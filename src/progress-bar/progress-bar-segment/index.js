import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors } from '@atlaskit/theme';

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
        cursor: 'pointer'
      }

      const innerStyling = {
        width: '100%',
        display: 'flex',
        height: (isCompact) ? 8 / 2 : 8
      }

      const tooltipStyling = {
        visibility: 'hidden',
        width: '120px',
        backgroundColor: 'black',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '6px',
        padding: '5px 0',
        position: 'absolute',
        zIndex: 1
      }

      if (!tooltip) {
        return <div style={segmentStyling} className="segment" />;
      }

      return(
        <div style={segmentStyling} className="segment">
          <span style={tooltipStyling} className="ttp">{tooltip}</span>
        </div>
      )
    }
}
