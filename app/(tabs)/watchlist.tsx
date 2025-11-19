import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';

import { View } from '@/components/Themed';
import { useQuery } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { fetchWatchlistMovies } from '../../api/watchlist';
import MovieListItem from '../../components/movies/MovieListItem';

export default function WatchList() {
  const {
    data: watchlist,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['watchlist'],
    queryFn: fetchWatchlistMovies,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Watchlist' }} />
      <FlatList
        data={watchlist}
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
