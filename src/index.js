/**
 * @class ExampleComponent
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors } from '@atlaskit/theme';
import ProgressBar, { Segment } from './progress-bar';

import styles from './styles.css'

export default class ProgressTracker extends Component<Props> {
  static propTypes = {
    isCompact: PropTypes.bool,
    segments: PropTypes.array
  }
  static defaultProps = {
      isCompact: false,
      segments: [
        {
          proportionComplete: 50,
          color: colors.G400,
          label: 'Done'
        },
        {
          proportionComplete: 20,
          color: colors.B400,
          label: 'In progress'
        }
      ]
  };

  render() {
    const {
      isCompact,
      segments
    } = this.props

    return (
        <ProgressBar isCompact={this.props.isCompact}>
            {segments.map((proportionComplete, color, label) =>
                <Segment color={color} proportion={proportionComplete} label={label}/>
            )}
        </ProgressBar>
    );
  }
}
