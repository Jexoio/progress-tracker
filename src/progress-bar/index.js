import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Segment from './progress-bar-segment';
import { ProgressBarContainer } from './styled';

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
        isCompact,
        children
      } = this.props;

      return (
        <ProgressBarContainer isCompact={isCompact}>
          {children}
        </ProgressBarContainer>
      )
    }
}

export { Segment };
