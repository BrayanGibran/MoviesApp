import React from 'react';
import {View, Text} from 'react-native';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import {CastItem} from './CastItem';
import {FlatList} from 'react-native-gesture-handler';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}
export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* Detalles  */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text> {movieFull.vote_average} </Text>
          <Text style={{marginLeft: 10}}>
            - {movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>

        {/* Historia de la pelicula  */}
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Historia
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}>
          {movieFull.overview}
        </Text>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 16}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>

      {/* Casting */}
      <View style={{marginTop: 10, marginBottom: 30}}>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
            marginHorizontal: 20,
          }}>
          Actores
        </Text>

        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 70}}
        />
      </View>
    </>
  );
};
