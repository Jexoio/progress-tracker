import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Segment from './progress-bar-segment';
import { colors } from '@atlaskit/theme';

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
        isCompact
      } = this.props;

      const styling = {
        backgroundColor: colors.N40,
        borderRadius: 8 / 2 +'px',
        display: 'flex',
        height: (isCompact) ? 8 / 2 : 8 +'px',
        overflow: 'hidden',
        width: 100 +'%'
      }

      return (
        <div style={styling} className="progress-bar">
          <style>
            {extracss}
          </style>
          {children}
        </div>
      )
    }
}

export { Segment };
