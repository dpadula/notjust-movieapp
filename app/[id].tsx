import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { fetchMovieDetails } from '../api/movies';

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  console.log('🚀 ~ MovieDetails ~ id:', id);

  // normalize id which can be string | string[] | undefined to a single string or undefined
  const idParam = Array.isArray(id) ? id[0] : id;
  const movieId = idParam ? Number(idParam) : undefined;

  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['movies', idParam],
    queryFn: () => fetchMovieDetails(movieId as number),
  });
  console.log('🚀 ~ MovieDetails ~ movie:', movie);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return <Text>{error.message}</Text>;
  }
  return (
    <View>
      <Text>MovieDetails {movie.title}</Text>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});
