import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import LottieView from 'lottie-react-native';
import {Button} from '../components';
import {backgroundColor} from '../constants/colors';

interface props {
  children?: JSX.Element;
  navigation: any;
}

const StartScreen: React.FC<props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>TESLA FAN</Text>
      </View>
      <View style={styles.lottieWrapper}>
        <LottieView source={require('../assets/games.json')} autoPlay loop />
      </View>
      <View>
        <Button
          onPress={() => {
            navigation.navigate('Home');
          }}>
          Start Exploring
        </Button>
      </View>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  heading: TextStyle;
  lottieWrapper: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'space-around',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 52,
    textAlign: 'center',
    color: 'white',
  },
  lottieWrapper: {
    width: '100%',
    height: 500,
  },
});

export {StartScreen};
