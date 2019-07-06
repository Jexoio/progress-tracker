/**
 * @class ExampleComponent
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        color: 'rgb(0, 135, 90)',
        label: 'Done'
      },
      {
        proportionComplete: .2,
        color: 'rgb(0, 82, 204)',
        label: 'In progress'
      }
    ]
  };

  render() {
    const {
      isCompact,
      segments,
      tooltip
    } = this.props;

    return (
      <ProgressBar isCompact={isCompact} tooltip={tooltip}>
        {segments.map(({proportionComplete, color, label}, index) =>
          <Segment key={index} color={color} proportion={proportionComplete} tooltip={label} isCompact={isCompact}/>
        )}
      </ProgressBar>
    );
  }
}
