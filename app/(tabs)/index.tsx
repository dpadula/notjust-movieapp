import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';

import { View } from '@/components/Themed';
import { useQuery } from '@tanstack/react-query';
import { Stack } from 'expo-router';
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
    queryFn: () => fetchTopRatedMovies(2),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Movies' }} />
      <FlatList
        data={movies}
        numColumns={2}
        keyExtractor={(movie) => movie.id}
        contentContainerStyle={{ gap: 10 }}
        columnWrapperStyle={{ gap: 10 }}
        renderItem={({ item }) => <MovieListItem movie={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
});
