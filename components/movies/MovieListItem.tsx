import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const MovieListItem = ({ movie }: { movie: any }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
        style={{
          width: '100%',
          aspectRatio: 3 / 5,
          borderRadius: 10,
        }}
      />
      <Text>{movie.name}</Text>
    </View>
  );
};

export default MovieListItem;

const styles = StyleSheet.create({});
