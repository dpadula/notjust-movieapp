import { StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import { useEffect } from 'react';
import { fetchTopRatedMovies } from '../../api/movies';

export default function TabOneScreen() {
  useEffect(() => {
    fetchTopRatedMovies();
  }, []);
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
