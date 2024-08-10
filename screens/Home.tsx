import React from 'react'
import { Dimensions, View, Text, PixelRatio } from 'react-native'
import ShopImg from '../components/Home/ShopImg'
import ActionButton from '../components/ActionButton'

const Home = () => {
  return (
    <View style={{display: 'flex', justifyContent: "center", alignItems: 'center'}}>
        <ShopImg />
        <View style={{alignItems: 'center', paddingHorizontal: 32, width: Dimensions.get('window').width, display: 'flex', gap: 6}}>
            <Text style={{textAlign: 'left', fontSize: 32, fontWeight: 'bold'}}>Welcome to App</Text>
            <Text style={{textAlign: 'left', fontSize: PixelRatio.getPixelSizeForLayoutSize(8), maxWidth:'100%', marginBottom: 20  }}>Lorem ipsum dolor sit amet consectetur. A ut pellentesque amet phasellus augue. Neque at felis pulvinar malesuada varius egestas dis cras.</Text>
            <ActionButton name='Login' textColor='white' backgroundColor='#3aa3dc' border = {false}/>
            <ActionButton name='Register' textColor='black' backgroundColor='white' border />
        </View>

        <View>
        </View>
    </View>
  )
}

export default Home