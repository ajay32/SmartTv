import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { rS, rVS, rMS } from './src/styles/responsive'
import Home from './src/screens/Home'
import Login from './src/screens/auth/Login'
import ControllerPractice from './src/components/controllers/ControllerPractice'


const App = () => {
  return (
    <SafeAreaView>
      {/* <Home /> */}
      <Login />
      {/* <ControllerPractice /> */}
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})