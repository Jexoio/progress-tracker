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
        color: '#00875A',
        label: 'Done'
      },
      {
        proportionComplete: .2,
        color: '#0052CC',
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
      <div>EXAMPLE</div>
    );
  }
}
