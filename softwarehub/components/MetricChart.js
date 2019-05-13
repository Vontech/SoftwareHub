import React from 'react';
import { Text } from 'react-native';

/**
 * Represents a chart to be displayed on the frontend
 */
export default class MetricChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    console.log(this.props.info);
  }

  render() {
    return (
      <div>
      </div>
    );
  }

}

const styles = {

};