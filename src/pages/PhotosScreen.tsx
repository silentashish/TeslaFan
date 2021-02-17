import React from 'react';
import {
  View,
  Image,
  ViewStyle,
  StyleSheet,
  ImageStyle,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Header} from '../components';
import {backgroundColor} from '../constants/colors';

interface props {
  children?: JSX.Element;
}

const PhotosScreen: React.FC<props> = () => {
  return (
    <View style={styles.container}>
      <Header>Photos</Header>
      <ScrollView>
        <Image style={styles.image} source={require('../assets/image1.jpg')} />
        <Image style={styles.image} source={require('../assets/tesla2.jpg')} />
        <Image style={styles.image} source={require('../assets/tesla3.jpg')} />
        <Image style={styles.image} source={require('../assets/tesla4.jpg')} />
        <Image style={styles.image} source={require('../assets/tesla5.jpg')} />
        <Image style={styles.image} source={require('../assets/tesla6.jpg')} />
      </ScrollView>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  image: ImageStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 8,
  },
});

export {PhotosScreen};
