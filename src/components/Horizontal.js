import React from 'react';
import { ScrollView, View, Text } from 'react-native';

import styles from './styles';

export default function Horizontal() {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      style={styles.container}
    >
      <View style={styles.outer}>
        <Text style={styles.innerText}>
          Rest quality vidoes
        </Text>
      </View>
      <View style={[styles.outer, styles.outerOne]}>
        <Text style={styles.innerText}>
          Horizontal component
        </Text>
      </View>
      <View style={[styles.outer, styles.purple]}>
        <Text style={styles.innerText}>
          avaliable on IOS and Android
        </Text>
      </View>
    </ScrollView>
  );
}
