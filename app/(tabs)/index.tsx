import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';

import { View } from '@/components/Themed';
import { useQuery } from '@tanstack/react-query';
import { fetchTopRatedMovies } from '../../api/movies';
import MovieListItem from '../../components/movies/MovieListItem';

export default function TabOneScreen() {
  const {
    data: movies,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['movies'],
    queryFn: fetchTopRatedMovies,
  });
  console.log('🚀 ~ TabOneScreen ~ movies:', movies);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieListItem movie={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
