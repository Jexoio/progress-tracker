import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip'

export default class ProgressBarSegment extends Component {
    static propTypes = {
      color: PropTypes.string,
      proportion: PropTypes.number,
      tooltip: PropTypes.string,
      isCompact: PropTypes.bool
    }

    static defaultProps = {
      color: 'rgb(223, 225, 230)',
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


      if (!tooltip) {
        return <div style={segmentStyling} className="segment" />;
      }

      return(
        <div style={segmentStyling} className="segment" data-tip={tooltip}>
          <ReactTooltip effect="solid" place="top" className="progress-tooltip"/>
        </div>
      )
    }
}
