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
      link: 'https://www.youtube.com/watch?v=eEaHNpuULtU',
      title: 'Tesla Model 3: One Year Later',
    },
    {
      link: 'https://www.youtube.com/watch?v=m7atGkba-Z8',
      title: 'Tesla Cybertruck event in 5 minutes',
    },
    {
      link: 'https://www.youtube.com/watch?v=DG9ezAuSn4c',
      title: 'Is the Tesla CyberTruck Worth it?! - A Truck Owners Thoughts',
    },
    {
      title: 'Why I Ordered a Tesla CyberTruck!',
      link: 'https://www.youtube.com/watch?v=OX1xG0a4TVo',
    },
    {
      title: 'Discover: Scheduled Departure',
      link: 'https://www.youtube.com/watch?v=UjenHNz-MRI',
    },
  ];
  return (
    <View style={styles.container}>
      <Header>Tesla Videos</Header>
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
