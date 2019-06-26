import React from 'react';

import ProgressTracker from '../src/index';

class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <ProgressTracker isCompact={true}/>
      </div>
    );
  }
}

export default Example;
