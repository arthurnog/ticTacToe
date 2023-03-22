import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import Board from './index'


export function BoardScreen() {
  return (
    <View style={styles.container}>
      <div>
        <Board/>
      </div>
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