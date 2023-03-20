import { View, StyleSheet, Text } from 'react-native'
import React from 'react'


export function BoardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Board</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111',
  },
  text: {
    color: '#fff',
  },
})