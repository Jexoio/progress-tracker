import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Segment from './progress-bar-segment';
import ReactTooltip from 'react-tooltip'

const extracss = `.segment :first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

.segment :last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}

.segment :hover .ttp {
  visibility: visible;
}
.progress-tooltip {
  font-size: 12px;
  padding: 2px 6px;
  max-width: 240px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 1.3;
}
.progress-tooltip:after {
  content: none !important;
}`;

export default class ProgressBar extends Component {
    static propTypes = {
      isCompact: PropTypes.bool,
      children: PropTypes.array
    }

    static defaultProps = {
      children: null,
      isCompact: true,
    };

    render() {
      const {
        children,
        isCompact,
        tooltip
      } = this.props;

      const styling = {
        backgroundColor: 'rgb(223, 225, 230)',
        borderRadius: 8 / 2 +'px',
        display: 'flex',
        height: (isCompact) ? 8 / 2 : 8 +'px',
        overflow: 'hidden',
        width: 100 +'%'
      }

      return (
        <div style={styling} className="progress-bar" data-tip={tooltip}>
          {tooltip && (<ReactTooltip effect="solid" place="top" className="progress-tooltip"/>)}
          <style>
            {extracss}
          </style>
          {children}
        </div>
      )
    }
}

export { Segment };
