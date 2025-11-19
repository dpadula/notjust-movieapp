import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const MovieListItem = ({ movie }: { movie: any }) => {
  return (
    <View style={{ padding: 10, flex: 1 }}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
        }}
        style={{ width: '100%', aspectRatio: 1, borderRadius: 10 }}
      />
      <Text>{movie.name}</Text>
    </View>
  );
};

export default MovieListItem;

const styles = StyleSheet.create({});
