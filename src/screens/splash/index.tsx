import React from 'react';

import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import {DEVICE_WIDTH} from "../../styles";

type SplashProps = {};

export const Splash = (props: SplashProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
      />
    </SafeAreaView>
  );
};

const logoSize = DEVICE_WIDTH / 1.75;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  logo: {
    width: logoSize,
    height: logoSize,
    alignSelf: 'center',
  },
});
