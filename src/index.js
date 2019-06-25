/**
 * @class ExampleComponent
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProgressBar, { Segment } from './progress-bar';

import styles from './styles.css'

export default class ExampleComponent extends Component<Props> {
  static propTypes = {
    isCompact: PropTypes.bool,
    segments: PropTypes.array
  }
  static defaultProps = {
      isCompact: false,
      segments: [
        {
          proportionComplete: 5,
          color: '#36B37E',
          label: 'Done'
        },
        {
          proportionComplete: 2,
          color: '#0052CC',
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
