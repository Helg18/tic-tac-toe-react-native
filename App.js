import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        {/* Fila */}
        <View style={styles.row}>
          <View style={[styles.casilla, { borderTopWidth: 0, borderLeftWidth: 0 } ]}></View>
          <View style={[styles.casilla, { borderTopWidth: 0 }]}></View>
          <View style={[styles.casilla, { borderTopWidth: 0, borderRightWidth: 0}]}></View>
        </View>

        {/* Fila */}
        <View style={styles.row}>
          <View style={[styles.casilla, { borderLeftWidth: 0}]}></View>
          <View style={[styles.casilla, {}]}></View>
          <View style={[styles.casilla, { borderRightWidth: 0 }]}></View>
        </View>

        {/* Fila */}
        <View style={styles.row}>
          <View style={[styles.casilla, { borderBottomWidth: 0, borderLeftWidth: 0}]}></View>
          <View style={[styles.casilla, { borderBottomWidth: 0 }]}></View>
          <View style={[styles.casilla, { borderBottomWidth: 0, borderRightWidth: 0}]}></View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  casilla: {
    borderWidth: 3,
    height: 100,
    width: 100
  },
  row: {
    flexDirection: "row"
  }
});
