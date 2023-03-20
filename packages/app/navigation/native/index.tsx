import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { BoardScreen } from '../../features/board/screen'
import { EndGameScreen } from 'app/features/end_game/screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
  settings: undefined
  board: undefined
  end_game: undefined
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="board"
        component={BoardScreen}
        options={{
          title: 'Board',
        }}
      />
      <Stack.Screen
        name="end_game"
        component={EndGameScreen}
        options={{
          title: 'End Game',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
    </Stack.Navigator>
  )
}
