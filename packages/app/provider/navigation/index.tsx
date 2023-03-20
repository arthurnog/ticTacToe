import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import React from 'react'
import { useMemo } from 'react'

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              'user-detail': 'user/:id',
              board:'board',
              end_game:'end_game'
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
