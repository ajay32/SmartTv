import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { rS, rVS, rMS } from './src/styles/responsive'
import Home from './src/screens/Home'


const App = () => {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})