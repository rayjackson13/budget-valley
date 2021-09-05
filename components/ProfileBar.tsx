import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Image, LayoutChangeEvent, StyleSheet, View, ViewStyle } from 'react-native';
import { Text, Title, useTheme } from 'react-native-paper';
import ProfileImage from 'assets/images/profile.jpeg';

type ProfileBarProps = {
  style?: ViewStyle
}

export default function ProfileBar({ style }: ProfileBarProps) {
  const [viewWidth, setViewWidth] = useState(0);
  const fadeInAnim = useRef(new Animated.Value(0)).current;
  const theme = useTheme();
  const styles = useStyles(theme);
  const viewPadding = 5;
  const avatarSize = 50;
  const translateX = fadeInAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [viewWidth - avatarSize - viewPadding * 2, 0],
  });
  const rotate = fadeInAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const onLayout = (event: LayoutChangeEvent) => {
    const { layout } = event.nativeEvent;
    setViewWidth(layout.width);
  };

  const runFadeInAnimation = () => {
    Animated.timing(fadeInAnim, {
      useNativeDriver: true,
      duration: 600,
      toValue: 1,
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    }).start();
  };

  useEffect(() => {
    runFadeInAnimation();
  }, []);

  return (
    <Animated.View
      style={[styles.wrap, style, { padding: viewPadding, opacity: fadeInAnim }]}
      onLayout={onLayout}
    >
      <View style={styles.row}>
        <Animated.View style={[styles.avatar, { transform: [{ translateX }, { rotate }], opacity: fadeInAnim }]}>
          <Image source={ProfileImage} style={styles.image} resizeMode="cover" />
        </Animated.View>
        <Animated.View style={[styles.content, { opacity: fadeInAnim }]}>
          <Title style={styles.title}>
            {'Welcome back, '}
            <Text style={styles.accent}>Kostya</Text>
            !
          </Title>
        </Animated.View>
      </View>
    </Animated.View>
  );
}

const useStyles = ({ colors }: ReactNativePaper.Theme) => StyleSheet.create({
  wrap: {
    width: '100%',
    padding: 5,
    backgroundColor: colors.darkGrey,
    borderRadius: 64,
  },
  row: {
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
  accent: {
    color: colors.accent,
    fontWeight: 'bold',
  },
});
