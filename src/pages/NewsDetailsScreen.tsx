import React, {useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {Header} from '../components';
import {backgroundColor, secondaryColor} from '../constants/colors';
import {WebView} from 'react-native-webview';

interface props {
  children?: JSX.Element;
  route?: any;
}

const NewsDetailsScreen: React.FC<props> = (props) => {
  const [loading, setLoading] = useState(true);
  const {link} = props.route.params;
  return (
    <View style={styles.container}>
      <Header back>News</Header>
      {loading && (
        <View style={styles.boxView}>
          <ActivityIndicator
            size={40}
            color={secondaryColor}
            style={{marginTop: 20, position: 'absolute'}}
          />
        </View>
      )}
      <WebView source={{uri: link}} onLoad={() => setLoading(false)} />
      {/* {link && (
        
      )} */}
    </View>
  );
};

interface Style {
  container: ViewStyle;
  heading: TextStyle;
  lottieWrapper: ViewStyle;
  boxView: ViewStyle;
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
  boxView: {
    height: '95%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
});

export {NewsDetailsScreen};
