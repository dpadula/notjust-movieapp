import { useLocalSearchParams } from 'expo-router/build/hooks';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>MovieDetails {id}</Text>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});
