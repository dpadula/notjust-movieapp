import { FontAwesome } from '@expo/vector-icons';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { fetchMovieDetails } from '../api/movies';
import { addMovieToWatchList } from '../api/watchlist';

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  // normalize id which can be string | string[] | undefined to a single string or undefined
  const idParam = Array.isArray(id) ? id[0] : id;
  const movieId = idParam ? Number(idParam) : undefined;

  const client = useQueryClient();

  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['movies', idParam],
    queryFn: () => fetchMovieDetails(movieId as number),
  });
  console.log('🚀 ~ MovieDetails ~ movie:', JSON.stringify(movie, null, 2));

  const { mutate } = useMutation({
    mutationFn: () => addMovieToWatchList(movieId!),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['watchlist'] });
    },
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return <Text>{error.message}</Text>;
  }
  return (
    <View>
      <Stack.Screen
        options={{ title: movie.title, headerBackTitle: 'Movies' }}
      />
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
        }}
        style={{ width: '100%', height: 300 }}
      />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 30, fontWeight: '500', marginVertical: 10 }}>
          {movie.title}
        </Text>
        <View style={{ marginVertical: 10 }}>
          <Pressable
            onPress={() => mutate()}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}
          >
            <FontAwesome name='bookmark-o' size={24} color='black' />
            <Text>Add to watchlist</Text>
          </Pressable>
        </View>
        <Text style={{ fontSize: 16 }}>{movie.overview}</Text>
      </View>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});
