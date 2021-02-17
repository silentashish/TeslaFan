import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {Header} from '../components';
import {backgroundColor} from '../constants/colors';
import {Thumbnail} from 'react-native-thumbnail-video';

interface props {
  children?: JSX.Element;
}

const VideoScreen: React.FC<props> = () => {
  const datas = [
    {
      link: 'https://www.youtube.com/watch?v=Bya-t5yhwa0',
      title: 'The Gamestop Stock Situation',
    },
    {
      link: 'https://www.youtube.com/watch?v=_6siiSzDMoI',
      title: 'GameStop share trading explained - BBC News',
    },
    {
      link: 'https://www.youtube.com/watch?v=hNgjDdFgwM0',
      title: 'GameStop: Did investors win or lose? - BBC News',
    },
    {
      title:
        'GameStop: what it reveals about the US stockmarket | The Economist',
      link: 'https://www.youtube.com/watch?v=CBy3gNrF7YA&t=5s',
    },
  ];
  return (
    <View style={styles.container}>
      <Header>Gamestop Videos</Header>
      <ScrollView>
        {datas.map((item) => (
          <View style={styles.gridContainer}>
            <Thumbnail imageWidth={'100%'} url={item.link} />
            <Text style={styles.titleDetails}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  heading: TextStyle;
  lottieWrapper: ViewStyle;
  gridContainer: ViewStyle;
  titleDetails: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
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
  gridContainer: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
  },
  titleDetails: {
    color: '#1a1a1a',
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 5,
  },
});

export {VideoScreen};
