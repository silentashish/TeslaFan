import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import {Divider, Header} from '../components';
import {backgroundColor} from '../constants/colors';
import {stringData} from '../data';

interface props {
  children?: JSX.Element;
}

const InfoScreen: React.FC<props> = () => {
  return (
    <View style={styles.container}>
      <Header>About Gamestop</Header>
      <ScrollView>
        <Divider large />
        <View style={styles.imageWraper}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logoImage}
          />
        </View>
        <Divider large />
        <View>
          <Text style={styles.textDetails}>{stringData.homeInfo}</Text>
          <Divider large />
          <Text style={styles.textDetails}>{stringData.homeInfoSecond}</Text>
        </View>
        <Divider />
      </ScrollView>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  heading: TextStyle;
  lottieWrapper: ViewStyle;
  textDetails: TextStyle;
  logoImage: ImageStyle;
  imageWraper: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  textDetails: {
    color: 'white',
    fontSize: 18,
    textAlign: 'justify',
    maxWidth: '92%',
    alignSelf: 'center',
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
  logoImage: {
    width: 400,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    maxWidth: '96%',
  },
  imageWraper: {
    backgroundColor: 'white',
    maxWidth: '95%',
    alignSelf: 'center',
  },
});

export {InfoScreen};
