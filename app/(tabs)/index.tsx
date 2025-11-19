import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';

import { View } from '@/components/Themed';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { fetchTopRatedMovies } from '../../api/movies';
import MovieListItem from '../../components/movies/MovieListItem';

export default function TabOneScreen() {
  const { data, isLoading, isError, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: ({ pageParam = 1 }) => fetchTopRatedMovies(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  const movies = data?.pages?.flat();
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
        onEndReached={() => {
          fetchNextPage();
        }}
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
