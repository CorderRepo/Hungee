import { Image } from 'expo-image';
import { Platform, StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
  <Image
    source={require('@/assets/images/hungeeBackground.png')}
    style={styles.heroImage}
  />
}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome to Hungee!</ThemedText>
          <HelloWave />
        </ThemedView>
        <Link href="/getting-started" style={styles.getStartedButton}>
          <ThemedText type="link">Get Started →</ThemedText>
        </Link>
      </View>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Find meals that match your dietary options and make your nutritional life the best it can be.</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  getStartedButton: {
    padding: 8,
    backgroundColor: '#FFD700',
    borderRadius: 8,
  },
});
