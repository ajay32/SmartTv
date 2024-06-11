import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { rS, rVS, rMS } from '../styles/responsive'


const Home = () => {
  return (
    <>
      <Image 
      style={{width: rS(300), height: rVS(300)}}
      resizeMode={'cover'}
      source={{
        uri: 'https://wallpapers.com/images/high/shy-dobby-cartoon-fanart-nttrc4hubsie83x4.webp',
      }}/>

      <Text style={{paddingTop: rMS(10), fontSize: rMS(20), fontFamily: 'Hanuman-Black'}}>App</Text>
      <Text style={{paddingTop: rMS(10), fontSize: rMS(20), fontFamily: 'Hanuman-Bold'}}>App</Text>

      <Text style={{paddingTop: rMS(10), fontSize: rMS(20), fontFamily: 'Hanuman-Light'}}>App</Text>

      <Text style={{paddingTop: rMS(10), fontSize: rMS(20), fontFamily: 'Hanuman-Regular'}}>App</Text>

      <Text style={{paddingTop: rMS(10), fontSize: rMS(20), fontFamily: 'Hanuman-Thin'}}>App</Text>

   </>
  )
}

export default Home

const styles = StyleSheet.create({})