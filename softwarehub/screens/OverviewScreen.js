import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { List, ListItem, SearchBar } from 'react-native-elements';

import { MonoText } from '../components/StyledText';
import MetricChart from '../components/MetricChart';

export default class OverviewScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    filterText: null
  }

  handleFilterChanged = () => {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.filterSearchBar}>
          <SearchBar
            lightTheme
            value={this.state.filterText}
            platform={Platform.OS}
            onChangeText={this.handleFilterChanged}
            placeholder='Filter runs...'
          />
        </View>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text>Hi there</Text>
          <MetricChart />
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  contentContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  filterSearchBar: {
    padding: 12
  }
});
