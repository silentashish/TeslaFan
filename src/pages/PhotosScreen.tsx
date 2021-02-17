import React from 'react';
import {View, Text, ViewStyle, StyleSheet} from 'react-native';
import {Header} from '../components';
import {backgroundColor} from '../constants/colors';

interface props {
  children?: JSX.Element;
}

const PhotosScreen: React.FC<props> = () => {
  return (
    <View style={styles.container}>
      <Header>Photos</Header>
      <Text></Text>
    </View>
  );
};

interface Style {
  container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
});

export {PhotosScreen};
