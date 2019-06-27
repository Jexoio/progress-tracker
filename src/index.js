/**
 * @class ExampleComponent
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors } from '@atlaskit/theme';
import ProgressBar, { Segment } from './progress-bar';

export default class ProgressTracker extends Component {
  static propTypes = {
    isCompact: PropTypes.bool,
    segments: PropTypes.array
  }
  static defaultProps = {
    isCompact: false,
    segments: [
      {
        proportionComplete: .5,
        color: colors.G400,
        label: 'Done'
      },
      {
        proportionComplete: .2,
        color: colors.B400,
        label: 'In progress'
      }
    ]
  };

  render() {
    const {
      isCompact,
      segments
    } = this.props;

    return (
      <ProgressBar isCompact={isCompact}>
        {segments.map(({proportionComplete, color, label}, index) =>
          <Segment key={index} color={color} proportion={proportionComplete} tooltip={label} isCompact={isCompact}/>
        )}
      </ProgressBar>
    );
  }
}
