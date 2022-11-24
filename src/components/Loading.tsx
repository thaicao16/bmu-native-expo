import React from 'react';

import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
  },
});

export const Loading = ({visible = false}) => {
  const {height, width} = useWindowDimensions();

  return (
    (visible && (
      <View style={[styles.container, {height, width}]}>
        <ActivityIndicator size="large" />
      </View>
    )) || <></>
  );
};
