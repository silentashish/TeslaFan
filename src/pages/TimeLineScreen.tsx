import React from 'react';
import {View, Text, ViewStyle, StyleSheet} from 'react-native';
import {Divider, Header} from '../components';
import {backgroundColor} from '../constants/colors';
import Timeline from 'react-native-timeline-flatlist';

interface props {
  children?: JSX.Element;
}

const TimeLineScreen: React.FC<props> = () => {
  const data = [
    {
      time: '1888',
      title: 'Induction Motor',
      description:
        'Nikola Tesla patents powertrain design built around AC induction motor',
    },
    {
      time: '2003',
      title: 'Establishment',
      description: 'Tesla Motors incorporated',
    },
    {
      time: '2008',
      title: 'Tesla Roadster',
      description:
        'Tesla Roadster launched with 0-60mph acceleration in 3.7seconds and 245 miles per charge on a lithium-ion battery',
    },
    {
      time: '2010',
      title: 'IPO of Tesla',
      description:
        'IPO raise US $226M (NASDATSLA at$17/share and closed at $23.89)',
    },
    {
      time: '2013',
      title: 'First premium sedan',
      description:
        "The world's first premium electric sedan is launched - Modal S",
    },
    {
      time: '2017',
      title: 'Open sources patent',
      description:
        'To advance sustainable transport Tesla Motors open sources its patents,Tesla Motors unveil P85D AWD and Autopilot',
    },
  ];
  return (
    <View style={styles.container}>
      <Header>Timeline</Header>
      <Divider />
      <View style={styles.timeLine}>
        <Timeline
          innerCircle={'dot'}
          data={data}
          circleSize={20}
          circleColor="rgb(45,156,219)"
          lineColor="rgb(45,156,219)"
          timeContainerStyle={{minWidth: 52, marginTop: 0}}
          timeStyle={{
            textAlign: 'center',
            backgroundColor: '#ff9797',
            color: 'white',
            padding: 5,
            borderRadius: 13,
          }}
          descriptionStyle={{color: 'gray'}}
          options={{
            style: {paddingTop: 5},
          }}
          titleStyle={{color: 'white'}}
        />
      </View>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  timeLine: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  timeLine: {
    paddingHorizontal: 50,
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
  },
});

export {TimeLineScreen};
