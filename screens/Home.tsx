import React from 'react';
import { Dimensions, View, Text, PixelRatio, StyleSheet } from 'react-native';
import ShopImg from '../components/Home/ShopImg';
import ActionButton from '../components/Home/ActionButton';

const Home = () => {
  return (
    <View style={styles.container}>
        <ShopImg />
        <View style={styles.content}>
            <Text style={styles.title}>Welcome to App</Text>
            <Text style={styles.description}>
                Lorem ipsum dolor sit amet consectetur. A ut pellentesque amet phasellus augue. Neque at felis pulvinar malesuada varius egestas dis cras.
            </Text>
            <ActionButton name='Login' textColor='white' backgroundColor='#3aa3dc' border={false} />
            <ActionButton name='Register' textColor='black' backgroundColor='white' border />
        </View>
        <View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 32,
    width: Dimensions.get('window').width,
    display: 'flex',
    gap: 6,
  },
  title: {
    textAlign: 'left',
    fontSize: 32,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'left',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
    maxWidth: '100%',
    marginBottom: 20,
  },
});

export default Home;
