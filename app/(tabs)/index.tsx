import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';

import { View } from '@/components/Themed';
import { useQuery } from '@tanstack/react-query';
import { fetchTopRatedMovies } from '../../api/movies';

const MovieCard = ({ movie }: { movie: any }) => {
  return (
    <View style={{ padding: 5 }}>
      <Text>{movie.name}</Text>
    </View>
  );
};

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
  // const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     setIsLoading(true);
  //     const movies = await fetchTopRatedMovies();
  //     setMovies(movies);
  //     setIsLoading(false);
  //   };
  //   fetchMovies();
  // }, []);

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
        renderItem={({ item }) => <MovieCard movie={item} />}
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
