import React from 'react'
import { Dimensions, Image } from 'react-native'

const ShopImg = () => {
  return (
    <Image source={require('../../assets/online-shopping.png')}  style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height* 0.5}}/>
  )
}

export default ShopImg